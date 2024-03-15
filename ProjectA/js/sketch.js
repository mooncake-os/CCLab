////////////////////////////////

let x = 190;
let drawStars = false;
let drawSun = false;
let speed;
let y;
let b = 0;
let disruption = false; //habitat annoyance
let kp = 0;

let habitat;

let posX;
let posY;

////////////////////////////////////////////////

function setup() {
  createCanvas(800, 500);

  x = 190 + random(50);

  colorMode(HSB);
  background(x, 63, 100);
  sky();
}

/////////////////////////////////////////////////

function draw() {
  if (drawSun == true && disruption) {
    let q, w, a;
    q = random(360);
    w = random(100);
    a = random(90, 100);
    background(q, w, a);
  }

  z = sin(frameCount / 80) * 60;
  y = 20 + z;

  sea(0, 60);

  cave(0, -75);

  if (drawSun == true && disruption) {
    let q, w, a;
    q = random(800);
    w = random(500);
    a = random(90, 100);

    fill(w, q, a);

    rect(100 + q, 100 + w, 20, 100);
    circle(110 + q, 220 + w, 20);

    rect(480 + q, 200 + w, 20, 100);
    circle(490 + q, 320 + w, 20);

    rect(200 + q, 70 + w, 20, 100);
    circle(210 + q, 190 + w, 20);

    rect(700 + q, 70 + w, 20, 100);
    circle(710 + q, 190 + w, 20);

    fill(255);
    noStroke();
    circle(600, 150, 150);
    triangle(600, 150, 625, 200, 440, 250);

    fill(0, 100, 100);
    textSize(150);
    text("x", 560, 190);
  }

  if (drawSun == false) {
    let kp = sin(frameCount / 80) * 60;

    noStroke();
    fill(0, 0, 0, 191);
    triangle(300, 285, 500, 276, 360, 180);
    Starcipede(-18, 25 + kp);

    if (mouseIsPressed == true && mouseY > 260) {
      noStroke();
      fill(240, 41, 100);
      circle(mouseX, mouseY, 35);
      fill(240, 10, 100);
      circle(mouseX, mouseY, 25);
      fill(255);
      circle(mouseX, mouseY, 10);
    }
  }
}

/////////////////////////////////////////////////
function sea(posX, posY) {
  y = sin(frameCount / 30) * 10;

  noStroke();
  fill(48, 22, 94);
  rect(0, 245, width, 200); // sand

  fill(255); //foam
  ellipse(posX + 50, posY + 390 + y, 400, 80);
  ellipse(posX + 350, posY + 390 + y, 400, 80);
  ellipse(posX + 700, posY + 390 + y, 400, 80);
  fill(239, 88, 68);
  rect(posX + 0, posY + width / 2, 800); //sea
  ellipse(posX + 50, posY + 400 + y, 400, 80);
  ellipse(posX + 350, posY + 400 + y, 400, 80);
  ellipse(posX + 700, posY + 400 + y, 400, 80);

  if (drawSun == false) {
    for (let i = 0; i < 20; i++) {
      let randomX = random(width);
      let randomY = random(400, 500);
      let randomZ = random(6);
      fill(255);
      circle(randomX, randomY, randomZ);
    }
  }
}

//////////////////////////////////////////////////

function sky() {
  noStroke();
  if (x > 215) {
    drawStars = true;
    disruption = false;
  }

  if (drawStars) {
    for (let i = 0; i < 400; i = i + 1) {
      let randomX = random(width);
      let randomY = random(250);
      let randomZ = random(4);
      fill(255);
      circle(randomX, randomY, randomZ);
    }
    fill(255);
    circle(680, 70, 70);
    fill(x, 63, 100);
    circle(690, 60, 50);
  }

  if (x < 215) {
    drawSun = true;
  }

  if (drawSun) {
    fill(58, 44, 100);
    circle(800, 0, 250);
    fill(58, 25, 100);
    circle(800, 0, 200);
    fill(255);
    circle(800, 0, 150);

    circle(100, 100, 50);
    circle(125, 100, 50);
    circle(150, 100, 50);
    circle(110, 80, 50);
    circle(135, 80, 50);

    circle(600, 50, 70);
    circle(580, 60, 50);
    circle(630, 60, 30);
    circle(570, 40, 40);
    circle(135, 80, 50);
  }
}

//////////////////////////////////////////////////////////////////

function segment(posX, posY) {
  z = sin(frameCount * 25) * 8;

  stroke(1);
  fill(255);
  triangle(
    posX + 385,
    posY + 252,
    posX + 385,
    posY + 260,
    posX + 350,
    posY + 256 + z
  ); //left top leg
  triangle(
    posX + 385,
    posY + 266,
    posX + 385,
    posY + 276,
    posX + 350,
    posY + 274 - z
  ); // left bottom leg

  triangle(
    posX + 420,
    posY + 252,
    posX + 420,
    posY + 260,
    posX + 455,
    posY + 256 - z
  ); //right top leg
  triangle(
    posX + 420,
    posY + 266,
    posX + 420,
    posY + 276,
    posX + 455,
    posY + 274 + z
  ); // right bottom leg
  rect(posX + 375, posY + 250, 50, 30, 10); //body
  circle(posX + 400, posY + 270, 25); // spine
}

/////////////////////////////////////////////////////////////////////

function EndSegment(posX, posY) {
  console.log(mouseY);

  z = sin(frameCount * 25) * 8;
  h = sin(frameCount / 70) * 100;
  if (
    mouseIsPressed == true &&
    mouseX > 337 &&
    mouseX < 434 &&
    mouseY > 260 &&
    mouseY < 500
  ) {
    noStroke();
    fill(0, 0, 100, 250);
    circle(posX + 400, posY + 250, 0 + h);
  }
  stroke(1);
  fill(255);
  triangle(
    posX + 385,
    posY + 252,
    posX + 385,
    posY + 260,
    posX + 350,
    posY + 256 + z
  ); //left top leg
  triangle(
    posX + 385,
    posY + 266,
    posX + 385,
    posY + 276,
    posX + 350,
    posY + 274 - z
  ); // left bottom leg

  triangle(
    posX + 420,
    posY + 252,
    posX + 420,
    posY + 260,
    posX + 455,
    posY + 256 - z
  ); //right top leg
  triangle(
    posX + 420,
    posY + 266,
    posX + 420,
    posY + 276,
    posX + 455,
    posY + 274 + z
  ); // right bottom leg
  rect(posX + 375, posY + 250, 50, 30, 10); //body
  fill(0);
  circle(posX + 375, posY + 270, 15);
  fill(255);
  circle(posX + 375, posY + 266, 6);
  circle(posX + 375, posY + 270, 4);
  fill(0);
  circle(posX + 425, posY + 270, 15);
  fill(255);
  circle(posX + 425, posY + 266, 6);
  circle(posX + 425, posY + 270, 4);
}

/////////////////////////////////////////////////////////////////////

function cave(posX, posY) {
  stroke(2);
  fill(27, 40, 23);
  triangle(
    posX + 200,
    posY + 350,
    posX + 600,
    posY + 350,
    posX + 400,
    posY + 100
  );
  fill(27, 30, 46);
  triangle(
    posX + 250,
    posY + 360,
    posX + 550,
    posY + 350,
    posX + 350,
    posY + 110
  );
  fill(27, 40, 7);
  habitat = triangle(
    posX + 270,
    posY + 360,
    posX + 525,
    posY + 350,
    posX + 360,
    posY + 230
  );

  if (disruption == true) {
    z = cos(frameCount * 1) * 5;

    fill(27, 0, 50);
    circle(375 + z, 250, 30);
    circle(405 + z, 250, 30);
    fill(27, 0, 75);
    circle(375 + z, 250, 20);
    circle(405 + z, 250, 20);
    fill(27, 0, 100);
    circle(375 + z, 250, 10);
    circle(405 + z, 250, 10);
  }

  if (mouseX > 270 && mouseX < 501 && mouseY > 157 && mouseY < 280) {
    disruption = true;
  } else {
    disruption = false;
  }
}

function Starcipede(posX, posY) {
  z = cos(frameCount / 90) * 100;

  segment(0 + posX + z * 0.1, 0 + posY);
  segment(0 + posX + z * 0.5, 10 + posY);
  segment(0 + posX + z * 0.25, 20 + posY);
  segment(0 + posX + z * 0.45, 30 + posY);
  segment(0 + posX + z * 1, 40 + posY);
  segment(0 + posX + z * 2, 50 + posY);
  segment(0 + posX + z * 1.5, 60 + posY);
  EndSegment(0 + posX + z, 70 + posY);
}

////////////////////////////////////////////////////////////////////