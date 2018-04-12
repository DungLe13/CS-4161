var fr = 200;
var mic, level;
var volhistory = [];
var amp;;

function setup() {
	createCanvas(450, 270);
	frameRate(fr);
	background(0);

	// Ellipse 1: Horizontal Lines
	x1 = 0;
	y1 = 37.5;
	// Ellipse 2: Vertical Lines
	x2 = 37.5;
	y2 = 0;

	// Audio Input and Waveform
	level = 0;
	mic = new p5.AudioIn();
	mic.start();

	amp = new p5.Amplitude();
	amp.setInput(mic);
}

function draw() {
	var currentLevel = amp.getLevel();
	// make it a little smoother using lerp
	level = lerp(level, currentLevel, 0.1);
	volhistory.push(currentLevel);

	stroke(255);
  	noFill();
  	ellipse(x1, y1, 0.5, 0.5);

  	x1 = x1 + 1;
  	beginShape();
  	for (var i=0; i<volhistory.length; i++) {
		var new_y1 = y1 + 15 * volhistory[i];
		vertex(x1, new_y1);
	}
	endShape();

	// When x1 > canvas width
  	if (x1 > 450) {
  		x1 = 0;
  		y1 = y1 + 37.5;
  	}

  	if (y1 > 270) {
  		stroke(255);
  		noFill();
  		ellipse(x2, y2, 0.5, 0.5);

  		y2 = y2 + 1;
  		beginShape();
  		for (var i=0; i<volhistory.length; i++) {
			var new_x2 = x2 + 15 * volhistory[i];
			vertex(new_x2, y2);
		}
		endShape();

		// When y2 > canvas height
	  	if (y2 > 270) {
	  		x2 = x2 + 37.5;
	  		y2 = 0;
	  	}
  	}
}