/*
	audio_visual3.js - Audio Visualization
	Author: Dung Le
	Date: 04/05/2018
*/

var mic;
var amp;
var x_count = 0;
var y_count = 0;

var volhistory = [];
var volhistory2 = [];
var volhistory3 = [];
var volhistory4 = [];
var volhistory5 = [];
var volhistory6 = [];
var volhistory7 = [];
var volhistory8 = [];
var volhistory9 = [];
var volhistory10 = [];
var volhistory11 = [];
var volhistory12 = [];
var volhistory13 = [];
var volhistory14 = [];
var volhistory15 = [];
var volhistory16 = [];
var volhistory17 = [];
var volhistory18 = [];
var volhistory19 = [];
var volhistory20 = [];
var volhistory21 = [];
var volhistory22 = [];
var volhistory23 = [];
var volhistory24 = [];
var volhistory25 = [];

var vvolhistory = [];
var vvolhistory2 = [];
var vvolhistory3 = [];
var vvolhistory4 = [];
var vvolhistory5 = [];
var vvolhistory6 = [];
var vvolhistory7 = [];
var vvolhistory8 = [];
var vvolhistory9 = [];
var vvolhistory10 = [];
var vvolhistory11 = [];
var vvolhistory12 = [];
var vvolhistory13 = [];
var vvolhistory14 = [];
var vvolhistory15 = [];

var fr = 100;

function setup() {
	createCanvas(270, 450, SVG);
	// Audio Input and Waveform
	level = 0;
	mic = new p5.AudioIn();
	mic.start();

	amp = new p5.Amplitude();
	amp.setInput(mic);

	frameRate(fr);
}

function draw() {
	background(255);
	stroke(0);
	noFill();
	if (frameRate() > 100) {
		console.log(frameRate())
	}
	// HORIZONTAL LINES
	horizontal_visualization(volhistory, amp, 18);

	if (x_count > width/2) {
		horizontal_visualization(volhistory2, amp, 36);
	}

	if (x_count > width) {
		horizontal_visualization(volhistory3, amp, 54);
	}

	if (x_count > 3*width/2) {
		horizontal_visualization(volhistory4, amp, 72);
	}

	if (x_count > 4*width/2) {
		horizontal_visualization(volhistory5, amp, 90);
	}

	if (x_count > 5*width/2) {
		horizontal_visualization(volhistory6, amp, 108);
	}

	if (x_count > 6*width/2) {
		horizontal_visualization(volhistory7, amp, 126);
	}

	if (x_count > 7*width/2) {
		horizontal_visualization(volhistory8, amp, 144);
	}

	if (x_count > 8*width/2) {
		horizontal_visualization(volhistory9, amp, 162);
	}

	if (x_count > 9*width/2) {
		horizontal_visualization(volhistory10, amp, 180);
	}

	if (x_count > 10*width/2) {
		horizontal_visualization(volhistory11, amp, 198);
	}

	if (x_count > 11*width/2) {
		horizontal_visualization(volhistory12, amp, 216);
	}

	if (x_count > 12*width/2) {
		horizontal_visualization(volhistory13, amp, 234);
	}

	if (x_count > 13*width/2) {
		horizontal_visualization(volhistory14, amp, 252);
	}

	if (x_count > 14*width/2) {
		horizontal_visualization(volhistory15, amp, 270);
	}

	if (x_count > 15*width/2) {
		horizontal_visualization(volhistory16, amp, 288);
	}

	if (x_count > 16*width/2) {
		horizontal_visualization(volhistory17, amp, 306);
	}

	if (x_count > 17*width/2) {
		horizontal_visualization(volhistory18, amp, 324);
	}

	if (x_count > 18*width/2) {
		horizontal_visualization(volhistory19, amp, 342);
	}

	if (x_count > 19*width/2) {
		horizontal_visualization(volhistory20, amp, 360);
	}

	if (x_count > 20*width/2) {
		horizontal_visualization(volhistory21, amp, 378);
	}

	if (x_count > 21*width/2) {
		horizontal_visualization(volhistory22, amp, 396);
	}

	if (x_count > 22*width/2) {
		horizontal_visualization(volhistory23, amp, 414);
	}

	if (x_count > 23*width/2) {
		horizontal_visualization(volhistory24, amp, 432);
	}

	if (x_count > 24*width/2) {
		horizontal_visualization(volhistory25, amp, 450);
	}

	x_count = x_count + 1;

	// VERTICAL LINES
	if (x_count > 25*width/2) {
		/*
		var vol10 = amp.getLevel();
		//level = lerp(level, vol10, 0.3);
		volhistory10.push(vol10);
		audioVisualizer2(volhistory10, 50);
		*/
		vertical_visualization(vvolhistory, amp, 18);

		if (x_count > height/2) {
			vertical_visualization(vvolhistory2, amp, 36);
		}

		if (x_count > height) {
			vertical_visualization(vvolhistory3, amp, 54);
		}

		if (x_count > 3*height/2) {
			vertical_visualization(vvolhistory4, amp, 72);
		}

		if (x_count > 4*height/2) {
			vertical_visualization(vvolhistory5, amp, 90);
		}

		if (x_count > 5*height/2) {
			vertical_visualization(vvolhistory6, amp, 108);
		}

		if (x_count > 6*height/2) {
			vertical_visualization(vvolhistory7, amp, 126);
		}

		if (x_count > 7*height/2) {
			vertical_visualization(vvolhistory8, amp, 144);
		}

		if (x_count > 8*height/2) {
			vertical_visualization(vvolhistory9, amp, 162);
		}

		if (x_count > 9*height/2) {
			vertical_visualization(vvolhistory10, amp, 180);
		}

		if (x_count > 10*height/2) {
			vertical_visualization(vvolhistory11, amp, 198);
		}

		if (x_count > 11*height/2) {
			vertical_visualization(vvolhistory12, amp, 216);
		}

		if (x_count > 12*height/2) {
			vertical_visualization(vvolhistory13, amp, 234);
		}

		if (x_count > 13*height/2) {
			vertical_visualization(vvolhistory14, amp, 252);
		}

		if (x_count > 14*height/2) {
			vertical_visualization(vvolhistory15, amp, 270);
		}

		y_count = y_count + 1;
	}

	if (x_count > 26*width/2) {
		save();
		noLoop();
	}

}

// Audio Visualizer for Horizontal Lines
function audioVisualizer(volhistory, k) {
	beginShape();
	for (var i=0; i<width/2; i++) {
		if (volhistory[i] < 0.1) {
			var y = 0;
		} else {
			var y = map(volhistory[i], 0, 1, -10, 10, true);
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
	volhis.push(vol);
	audioVisualizer(volhis, k);
}

// Draw Vertical Lines
function vertical_visualization(vvolhis, amp, k) {
	var vol = amp.getLevel();
	//var level = lerp(level, vol, 0.9);
	vvolhis.push(vol);
	audioVisualizer2(vvolhis, k);
}