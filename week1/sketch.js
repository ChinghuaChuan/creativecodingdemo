function setup() {
  createCanvas(480, 120);
  background(204);
}


function draw() {
  // some creature
  fill(0);
  beginShape();
  vertex(50, 120);
  vertex(100, 90);
  vertex(110, 60);
  vertex(80, 20);
  vertex(210, 60);
  vertex(160, 80);
  vertex(200, 90);
  vertex(140, 100);
  vertex(130, 120);
  endShape();
  fill(255, 255, 0);
  ellipse(155, 60, 8, 8);
}

/*
// transparency
noStroke();
background(204, 226, 225);

fill(255, 0, 0, 160);
ellipse(132, 82, 200, 200);
fill(0, 255, 0, 160);
ellipse(228, -16, 200, 200);
fill(0, 0, 255, 160);
ellipse(268, 118, 200, 200);

*/

/* // RGB
background(0);
noStroke();

fill(255, 0, 0);
ellipse(132, 82, 200, 200);
fill(0, 255, 0);
ellipse(228, -16, 200, 200);
fill(0, 0, 255);
ellipse(268, 118, 200, 200);

*/
// noFill()
/*
fill(153);
ellipse(132, 82, 200, 200);
noFill();
ellipse(228, -16, 200, 200);
*/
// strokeCap
/*
strokeWeight(10);
strokeCap(SQUARE);
line(40, 25, 80, 95);
strokeCap(ROUND);
line(140, 25, 200, 95);
*/
// strokeJoin
/*
// Round the stroke corners
strokeJoin(ROUND);
rect(40,25,70,70);
// Bevel the stroke corners
strokeJoin(BEVEL);
rect(140,25,70,70);
*/

// strokeWeight
/*
ellipse(90, 60, 80, 80);
strokeWeight(8);
ellipse(180, 60, 80, 80);
strokeWeight(15);
ellipse(280, 60, 80, 80);
*/

 /*
 // pac-man
 angleMode(DEGREES);
 fill(255, 255, 0);
 arc(90, 60, 80, 80, 45, 315);
 arc(180, 60, 80, 80, 60, 300);
 arc(250, 60, 80, 80, 45, 315);
 arc(320, 60, 80, 80, 30, 330);*/

  // drawing butterfly
  /*// head
  ellipse(100, 100, 20, 20);
  // body
  rect(90, 110, 20, 50);
  // wings
  quad(110, 110, 150, 90, 150, 180, 110, 160);
  quad(50, 90, 90, 110, 90, 160, 50, 180);*/
  // drawing triangle and a line on top
  /*fill(255, 255, 0);
  triangle(80, 80, 40, 120, 120, 120);
  line(40, 80, 120, 80);*/

  // drawing the simple frog
  /*
  // face
  fill(0, 255, 191);
  ellipse(100, 60, 80, 40);
  // eyes
  fill(255,255, 0);
  ellipse(80, 40, 10, 10);
  ellipse(120, 40, 10, 10);
  // mouth
  fill(255,153,255);
  ellipse(100, 65, 40, 10);
  */
  // Exp 2-2. Making circles
  /*if(mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 40, 40);
  */

//}
