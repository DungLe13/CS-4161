#!/usr/bin/env python3
"""
    deep_q-network.py - Tutorial 4: Deep Q-Networks and Beyond
    Author: Dung Le (dungle@bennington.edu)
    Date: 03/25/2018
"""

import gym
import numpy as np
import random
import tensorflow as tf
import tensorflow.contrib.slim as slim
import scipy.misc
import os

# Load the game environment
from gridworld import gameEnv
env = gameEnv(partial=False, size=5)

# Implementation of Deep Q-network
class Q_network():
    def __init__(self, h_size):
        '''
        The network receives a frame from the game, flatten into an array
        It then resizes the array and passes it through 4 convolutional layers
        '''
        self.scalarInput = tf.placeholder(shape=[None, 21168], dtype=tf.float32)
        self.imageIn = tf.reshape(self.scalarInput, shape=[-1, 84, 84, 3])
        # Four convolutional layers
        self.conv1 = slim.conv2d(inputs=self.imageIn, num_outputs=32, kernel_size=[8, 8],
                                 stride=[4, 4], padding='VALID', biases_initializer=None)
        self.conv2 = slim.conv2d(inputs=self.conv1, num_outputs=64, kernel_size=[4, 4],
                                 stride=[2, 2], padding='VALID', biases_initializer=None)
        self.conv3 = slim.conv2d(inputs=self.conv2, num_outputs=64, kernel_size=[3, 3],
                                 stride=[1, 1], padding='VALID', biases_initializer=None)
        self.conv4 = slim.conv2d(inputs=self.conv3, num_outputs=h_size, kernel_size=[7, 7],
                                 stride=[1, 1], padding='VALID', biases_initializer=None)

        '''
        Take the output from the final layer + split it into advantage and value streams
        '''
        self.streamAC, self.streamVC = tf.split(self.conv4,2,3)
        self.streamA = slim.flatten(self.streamAC)
        self.streamV = slim.flatten(self.streamVC)

        xavier_init = tf.contrib.layers.xavier_initializer()
        self.AW = tf.Variable(xavier_init([h_size//2, env.actions]))
        self.VW = tf.Variable(xavier_init([h_size//2, 1]))
        self.Advantage = tf.matmul(self.streamA, self.AW)
        self.Value = tf.matmul(self.streamV, self.VW)

        # Combine them together to get final Q-values
        self.Q_out = self.Value + tf.subtract(self.Advantage, tf.reduce_mean(self.Advantage, axis=1, keep_dims=True))
        self.predict = tf.argmax(self.Q_out, 1)

        # Loss computation: sum(square(target - predicted Q-values))
        self.targetQ = tf.placeholder(shape=[None], dtype=tf.float32)
        self.actions = tf.placeholder(shape=[None], dtype=tf.int32)
        self.actions_onehot = tf.one_hot(self.actions, env.actions, dtype=tf.float32)

        self.Q = tf.reduce_sum(tf.multiply(self.Q_out, self.actions_onehot), axis=1)

        self.td_error = tf.square(self.targetQ - self.Q)
        self.loss = tf.reduce_mean(self.td_error)
        self.trainer = tf.train.AdamOptimizer(learning_rate=0.0001)
        self.updateModel = self.trainer.minimize(self.loss)

# Experience Replay
class experience_buffer():
    def __init__(self, buffer_size = 50000):
        self.buffer = []
        self.buffer_size = buffer_size

    def add(self, experience):
        if len(self.buffer) + len(experience) >= self.buffer_size:
            self.buffer[0:(len(experience) + len(self.buffer)) - self.buffer_size] = []
        self.buffer.extend(experience)

    def sample(self, size):
        return np.reshape(np.array(random.sample(self.buffer, size)), [size, 5])

# Helper Functions
def processState(states):
    return np.reshape(states, [21168])

def updateTargetGraph(tfVars, tau):
    total_vars = len(tfVars)
    op_holder = []
    for idx, var in enumerate(tfVars[0:total_vars//2]):
        op_holder.append(tfVars[idx+total_vars//2].assign((var.value()*tau) + ((1-tau)*tfVars[idx+total_vars//2].value())))

    return op_holder

def updateTarget(op_holder, sess):
    for op in op_holder:
        sess.run(op)

''' TRAINING THE NETWORK '''
# Set up training parameters
batch_size = 32     # number of experiences used for each training step
update_freq = 4     # how often to perform a training step
y = 0.99            # discount factor on the target Q-values
startE = 1          # starting chance of random action
endE = 0.1          # final chance of random action

annealing_steps = 10000       # how many steps of training to reduce startE to endE
num_episodes = 10000         # number of episodes of game environment to train with
pretrain_steps = 10000       # steps of random actions before training begins
max_epLength = 50            # the max allowed length of the episode

load_model = False     # whether to load the saved model
path = './dqn'         # the path to save the model to
h_size = 512           # the size of final convolutional layer before splitting
tau = 0.001            # rate to update target network toward primary network

tf.reset_default_graph()
mainQN = Q_network(h_size)
targetQN = Q_network(h_size)

saver = tf.train.Saver()
trainables = tf.trainable_variables()
targetOps = updateTargetGraph(trainables, tau)

myBuffer = experience_buffer()
# Set the state of random action decrease
e = startE
stepDrop = (startE - endE)/annealing_steps

# Lists of total rewards and steps per episode
jList = []
rList = []
total_steps = 0

# Create a path for the model to be saved in
if not os.path.exists(path):
    os.makedirs(path)

with tf.Session() as sess:
    sess.run(tf.global_variables_initializer())
    if load_model == True:
        print('Loading model...')
        ckpt = tf.train.get_checkpoint_state(path)
        saver.restore(sess, ckpt.model_checkpoint_path)

    for i in range(num_episodes):
        episodeBuffer = experience_buffer()
        # Reset environment and get first new observation
        s = env.reset()
        s = processState(s)
        d = False
        rAll = 0
        j = 0

        # The Q-Network
        while j < max_epLength:
            j += 1
            # Choose an action by greedily (with e chance of random action)
            if np.random.rand(1) < e or total_steps < pretrain_steps:
                a = np.random.randint(0, 4)
            else:
                a = sess.run(mainQN.predict, feed_dict={mainQN.scalarInput:[s]})[0]

            s1, r, d = env.step(a)
            s1 = processState(s1)
            total_steps += 1
            # Save the experience to the episode buffer
            episodeBuffer.add(np.reshape(np.array([s,a, r, s1, d]), [1, 5]))

            if total_steps > pretrain_steps:
                if e > endE:
                    e -= stepDrop

                if total_steps % (update_freq) == 0:
                    trainBatch = myBuffer.sample(batch_size)
                    # Double DQN update to the target Q-values
                    Q1 = sess.run(mainQN.predict, feed_dict={mainQN.scalarInput:np.vstack(trainBatch[:,3])})
                    Q2 = sess.run(targetQN.Q_out, feed_dict={targetQN.scalarInput:np.vstack(trainBatch[:,3])})
                    end_multiplier = -(trainBatch[:, 4] - 1)
                    doubleQ = Q2[range(batch_size), Q1]
                    targetQ = trainBatch[:,2] + (y * doubleQ * end_multiplier)

                    # Update the network with our target values
                    _ = sess.run(mainQN.updateModel,
                                 feed_dict={mainQN.scalarInput:np.vstack(trainBatch[:,0]),
                                            mainQN.targetQ:targetQ, mainQN.actions:trainBatch[:,1]})
                    updateTarget(targetOps, sess)

            rAll += r
            s = s1
            if d == True:
                break

        myBuffer.add(episodeBuffer.buffer)
        jList.append(j)
        rList.append(rAll)

        # Periodically save the model
        if i % 1000 == 0:
            saver.save(sess, path+'/model-'+str(i)+'.ckpt')
            print("Saved Model")

        if len(rList) % 10 == 0:
            print(total_steps, np.mean(rList[-10:]), e)
    saver.save(sess, path+'/model-'+str(i)+'.ckpt')

print("Percent of succesful episodes: " + str(sum(rList)/num_episodes) + "%")
