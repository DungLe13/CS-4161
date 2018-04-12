var x = 0;

function setup() {
  // put setup code here
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  background(100);
  ellipse(x, height/2, 50, 50);
}

function draw() {
  // put drawing code here
  ellipse(x, height/2, 20, 20);
  x = x + 1;
}