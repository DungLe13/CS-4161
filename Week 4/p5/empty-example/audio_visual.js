var fr = 600;
var mic;
var fft;

function setup() {
	createCanvas(270, 450, SVG);
	frameRate(fr);
	background(255);
	noFill();

	// Ellipse 1: Horizontal Lines
	x1 = 0;
	y1 = 45;
	// Ellipse 2: Vertical Lines
	x2 = 45;
	y2 = 0;

	// Audio Input and Waveform
	mic = new p5.AudioIn();
	mic.start();

	fft = new p5.FFT(0.8, 1024);
	fft.setInput(mic);
}

function draw() {
	var waveform = fft.waveform();
	var numPoints = waveform.length;

	stroke(0);
  	ellipse(x1, y1, 0.5, 0.5);

  	x1 = x1 + 1;
  	beginShape();
  	for (var i=0; i<numPoints; i++) {
		var new_y1 = y1 + 80 * waveform[i];
		vertex(x1, new_y1);
	}
	endShape();

	// When x1 > canvas width
  	if (x1 > width) {
  		x1 = 0;
  		y1 = y1 + 45;
  	}

  	if (y1 > height) {
  		stroke(0);
  		ellipse(x2, y2, 0.5, 0.5);

  		y2 = y2 + 1;
  		beginShape();
  		for (var i=0; i<numPoints; i++) {
			var new_x2 = x2 + 80 * waveform[i];
			vertex(new_x2, y2);
		}
		endShape();

		// When y2 > canvas height
	  	if (y2 > height) {
	  		x2 = x2 + 45;
	  		y2 = 0;
	  	}
  	}

  	if (y1 > height && x2 > width) {
  		save();
  		noLoop();
  	}
}