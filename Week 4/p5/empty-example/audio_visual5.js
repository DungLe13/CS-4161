var fr = 200;
var mic;
var fft;

function setup() {
	createCanvas(450, 270);
	frameRate(fr);
	background(0);
	noFill();

	// Ellipse 1: Horizontal Lines
	x1 = 0;
	y1 = 37.5;
	// Ellipse 2: Vertical Lines
	x2 = 37.5;
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

	stroke(255);
  	ellipse(x1, y1, 0.5, 0.5);

  	x1 = x1 + 1;
  	/*
  	beginShape();
  	for (var i=0; i<numPoints; i=i+10) {
		var new_y1 = y1 + 15 * waveform[i];
		vertex(x1, new_y1);
	}
	endShape();
	*/
	by1 = map((waveform.slice(0, 256)).reduce(getSum)/256, 0, 1, -15, 15);
	by2 = map((waveform.slice(256, 513)).reduce(getSum)/256, 0, 1, -15, 15);
	by3 = map((waveform.slice(513, 769)).reduce(getSum)/256, 0, 1, -15, 15);
	by4 = map((waveform.slice(769, 1025)).reduce(getSum)/256, 0, 1, -15, 15);

	bezier(x1, by1, x1, by2, x1, by3, x1, by4);

	// When x1 > canvas width
  	if (x1 > 450) {
  		x1 = 0;
  		y1 = y1 + 37.5;
  	}

  	if (y1 > 270) {
  		stroke(255);
  		ellipse(x2, y2, 0.5, 0.5);

  		y2 = y2 + 1;
  		beginShape();
  		for (var i=0; i<numPoints; i++) {
			var new_x2 = x2 + 15 * waveform[i];
			vertex(new_x2, y2+i);
		}
		endShape();

		// When y2 > canvas height
	  	if (y2 > 270) {
	  		x2 = x2 + 37.5;
	  		y2 = 0;
	  	}
  	}

  	if (y1 > height && x2 > width) {
  		save();
  		noLoop();
  	}
}

function getSum(total, num) {
    return total + num;
}
