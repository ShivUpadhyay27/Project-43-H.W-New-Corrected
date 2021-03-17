function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  background("black");
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);
  let c = map(mouseX, 0, width, 0, 175);
  let d = map(mouseX, 0, width, 40, 230);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  //drawing seconds hand
  push();
  rotate(scAngle);  //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);  
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  strokeWeight(10);

  noFill();  //Seconds 
  stroke("red"); 
  arc(0,0,300,300,0,scAngle); //Minutes 
  stroke("blue"); 
  arc(0,0,280,280,0,mnAngle); //Hour 
  stroke("yellow"); 
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}