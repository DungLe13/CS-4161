/*
	audio_visual6.js - Audio Visualization
	Author: Dung Le
	Date: 04/05/2018
*/

var mic, level;
var amp;
var volhistory;
var count;
var fr = 10;

function setup() {
	createCanvas(270, 450, SVG);
	frameRate(fr);

	resetSketch();
	var button = createButton("reset");
	button.mousePressed(resetSketch);
}

function resetSketch() {
	background(255);
	count = 0;
	volhistory = [];

	// Audio Input and Waveform
	level = 0;
	mic = new p5.AudioIn();
	mic.start();

	amp = new p5.Amplitude();
	amp.setInput(mic);
}

function draw() {
	stroke(0);
	noFill();

	var vol = amp.getLevel();
	//level = lerp(level, vol, 0.9);
	volhistory.push(vol);
	
	translate(width/2, height/2);
	audioVisualizer(volhistory);
	count = count + 1;
	
	if (count == 201) {
		//console.log(count);
		save();
		//noLoop();
	}
}

// Audio Visualizer
function audioVisualizer(volhistory) {
	beginShape();
	for (var theta=0; theta<50; theta=theta + 0.25) {
		var x = 5*theta * cos(theta);
		var y = 5*theta * sin(theta);

		if (volhistory[theta] < 0.1) {
			var nx = 0;
			var ny = 0;
		} else {
			var nx = 5*volhistory[4*theta]*cos(theta) - 0.4*5*volhistory[4*theta]*cos(theta);
			var ny = 5*volhistory[4*theta]*sin(theta) - 0.4*5*volhistory[4*theta]*sin(theta);
		}

		curveVertex(x + nx, y + ny);
	}
	endShape();
}