var n, m;
var progress;
var mic, level;

function setup() {
	createCanvas(700, 700, SVG);
	n = 5;
	m = 4;
	progress = 0;
	frameCount = 0

	mic = new p5.AudioIn();
	mic.start();
	level = 0;
}

function draw() {
	var currentLevel = mic.getLevel();
	// make it a little smoother using lerp
	level = lerp(level, currentLevel, 0.1);
	progress = progress + 5.0*level;

	background(255);
	fill(0, 50);
	translate(width/2, height/2);

	for (var i=0; i<n; i++) {
		var angle = map(i, 0, n, 0, TWO_PI);
		var t1 = map(sin(0.03*progress), -1, 1, -300, 300);
		push();
		rotate(angle + 0.01*progress);
		translate(t1, 0);

		for (var j=0; j<m; j++) {
			var angle2 = map(j, 0, m, 0, TWO_PI);
			var t2 = map(sin(-0.02*progress), -1, 1, -200, 200);
			var w = map(sin(0.01*progress), -1, 1, -100, 100);
			var h = map(sin(0.01*progress), -1, 1, -100, 100);

			push()
			rotate(angle2 - 0.02*progress);
			translate(t2, 0);
			noisyBezier();
			pop();
		}
		frameCount = frameCount + 1
		pop()
	}

	if (frameCount != 0 && frameCount % 1000 == 0) {
		save();
	}
}

function noisyBezier() {
	fill(0, 15);
	var x1 = map(noise(0.03*progress + 15), 0, 1, -300, 300);
	var x2 = map(noise(0.02*progress + 25), 0, 1, -300, 300);
	var x3 = map(noise(0.015*progress + 35), 0, 1, -300, 300);
	var x4 = map(noise(0.01*progress + 45), 0, 1, -300, 300);
	var y1 = map(noise(0.01*progress + 55), 0, 1, -300, 300);
	var y2 = map(noise(0.013*progress + 65), 0, 1, -300, 300);
	var y3 = map(noise(0.011*progress + 75), 0, 1, -300, 300);
	var y4 = map(noise(0.010*progress + 85), 0, 1, -300, 300);
	bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}