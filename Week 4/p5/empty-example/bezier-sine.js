function setup() {
	createCanvas(450, 450);
}

function draw() {
	background(255);
	stroke(0);
	noFill();

	bezier(50, 200, 133, 300, 216, 100, 300, 200);
}