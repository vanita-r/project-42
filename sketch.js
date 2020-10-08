function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //Calculating time using predefined func from p5.js
  hr = hour();
  mn = minute();
  sc = second(); 
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);
}

function draw() {
  background(255,255,255); 
  angleMode(DEGREES);
  //seconds
  push();
  rotate(scAngle);
  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //minutes
  push();
  rotate(mnAngle);
  translate(0,100);
  stroke(0,230,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //hours
  push();
  rotate(hrAngle);
  translate(0,200);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}