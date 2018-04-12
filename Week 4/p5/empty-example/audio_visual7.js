/*
	audio_visual3.js - Audio Visualization
	Author: Dung Le
	Date: 05/05/2018
*/

var mic;
var amp;
var x_count;

var volhistory, volhistory2, volhistory3, volhistory4, volhistory5, volhistory6, volhistory7, volhistory8, volhistory9;
var volhistory10, volhistory11, volhistory12, volhistory13, volhistory14, volhistory15, volhistory16, volhistory17;
var volhistory18, volhistory19, volhistory20, volhistory21, volhistory22, volhistory23, volhistory24, volhistory25;

var vvolhistory, vvolhistory2, vvolhistory3, vvolhistory4, vvolhistory5, vvolhistory6, vvolhistory7, vvolhistory8;
var vvolhistory9, vvolhistory10, vvolhistory11, vvolhistory12, vvolhistory13, vvolhistory14, vvolhistory15;

var fr = 100;

function setup() {
	createCanvas(270, 450, SVG);
	frameRate(fr);

	resetSketch();
	button = createButton("reset");
	button.mousePressed(resetSketch);
}

function resetSketch() {
	x_count = 0;

	// Volhistory for horizontal lines
	volhistory = [];
	volhistory2 = [];
	volhistory3 = [];
	volhistory4 = [];
	volhistory5 = [];
	volhistory6 = [];
	volhistory7 = [];
	volhistory8 = [];
	volhistory9 = [];
	volhistory10 = [];
	volhistory11 = [];
	volhistory12 = [];
	volhistory13 = [];
	volhistory14 = [];
	volhistory15 = [];
	volhistory16 = [];
	volhistory17 = [];
	volhistory18 = [];
	volhistory19 = [];
	volhistory20 = [];
	volhistory21 = [];
	volhistory22 = [];
	volhistory23 = [];
	volhistory24 = [];
	volhistory25 = [];

	// Vvolhistory for vertical lines
	vvolhistory = [];
	vvolhistory2 = [];
	vvolhistory3 = [];
	vvolhistory4 = [];
	vvolhistory5 = [];
	vvolhistory6 = [];
	vvolhistory7 = [];
	vvolhistory8 = [];
	vvolhistory9 = [];
	vvolhistory10 = [];
	vvolhistory11 = [];
	vvolhistory12 = [];
	vvolhistory13 = [];
	vvolhistory14 = [];
	vvolhistory15 = [];

	// Audio Input and Waveform
	level = 0;
	mic = new p5.AudioIn();
	mic.start();

	amp = new p5.Amplitude();
	amp.setInput(mic);
}

function draw() {
	background(255);
	stroke(0);
	noFill();

	// HORIZONTAL LINES
	horizontal_visualization(volhistory, amp, 18);
	horizontal_visualization(volhistory2, amp, 36);
	horizontal_visualization(volhistory3, amp, 54);
	horizontal_visualization(volhistory4, amp, 72);
	horizontal_visualization(volhistory5, amp, 90);
	horizontal_visualization(volhistory6, amp, 108);
	horizontal_visualization(volhistory7, amp, 126);
	horizontal_visualization(volhistory8, amp, 144);
	horizontal_visualization(volhistory9, amp, 162);
	horizontal_visualization(volhistory10, amp, 180);
	horizontal_visualization(volhistory11, amp, 198);
	horizontal_visualization(volhistory12, amp, 216);
	horizontal_visualization(volhistory13, amp, 234);
	horizontal_visualization(volhistory14, amp, 252);
	horizontal_visualization(volhistory15, amp, 270);
	horizontal_visualization(volhistory16, amp, 288);
	horizontal_visualization(volhistory17, amp, 306);
	horizontal_visualization(volhistory18, amp, 324);
	horizontal_visualization(volhistory19, amp, 342);
	horizontal_visualization(volhistory20, amp, 360);
	horizontal_visualization(volhistory21, amp, 378);
	horizontal_visualization(volhistory22, amp, 396);
	horizontal_visualization(volhistory23, amp, 414);
	horizontal_visualization(volhistory24, amp, 432);
	horizontal_visualization(volhistory25, amp, 450);

	x_count = x_count + 1;

	// VERTICAL LINES
	if (x_count > width/2) {
		vertical_visualization(vvolhistory, amp, 18);
		vertical_visualization(vvolhistory2, amp, 36);
		vertical_visualization(vvolhistory3, amp, 54);
		vertical_visualization(vvolhistory4, amp, 72);
		vertical_visualization(vvolhistory5, amp, 90);
		vertical_visualization(vvolhistory6, amp, 108);
		vertical_visualization(vvolhistory7, amp, 126);
		vertical_visualization(vvolhistory8, amp, 144);
		vertical_visualization(vvolhistory9, amp, 162);
		vertical_visualization(vvolhistory10, amp, 180);
		vertical_visualization(vvolhistory11, amp, 198);
		vertical_visualization(vvolhistory12, amp, 216);
		vertical_visualization(vvolhistory13, amp, 234);
		vertical_visualization(vvolhistory14, amp, 252);
		vertical_visualization(vvolhistory15, amp, 270);
	}

	if (x_count == 361) {
		//console.log(x_count);
		save();
		//noLoop();
	}

}

// Audio Visualizer for Horizontal Lines
function audioVisualizer(volhistory, k) {
	beginShape();
	for (var i=0; i<width/2; i++) {
		if (volhistory[i] < 0.1) {
			var y = 0;
		} else {
			var y = map(volhistory[i], 0, 1,-10, 10, true);
		}
		var z = y - 0.6*y*sin(i);
		curveVertex(2*i, k+z);
	}
	endShape();
}

// Audio Visualizer for Vertical Lines
function audioVisualizer2(volhistory, k) {
	beginShape();
	for (var i=0; i<height/2; i++) {
		if (volhistory[i] < 0.1) {
			var x = 0;
		} else {
			var x = map(volhistory[i], 0, 1, -10, 10, true);
		}
		var z = x - 0.6*x*sin(i);
		curveVertex(k+z, 2*i);
	}
	endShape();
}

// Draw Horizontal Lines
function horizontal_visualization(volhis, amp, k) {
	var vol = amp.getLevel();
	//var level = lerp(level, vol, 0.9);
	volhis.push(Math.random()*vol);
	audioVisualizer(volhis, k);
}

// Draw Vertical Lines
function vertical_visualization(vvolhis, amp, k) {
	var vol = amp.getLevel();
	//var level = lerp(level, vol, 0.9);
	vvolhis.push(Math.random()*vol);
	audioVisualizer2(vvolhis, k);
}

// Shuffle volume history array
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Get random int
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
