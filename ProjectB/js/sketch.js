let x, y;
let xSpeed;
let mySentence;

let sound;

function preload() {
  sound = loadSound('clock.mp3');
}

function setup() {
  
  sound.loop();
  x = 50;
  y = 200;
  xSpeed = -.5;
  
  createCanvas(600, 400);
  facts = str("Every day, approximately 151,600 people die around the world, which means about 6,316 people die every hour, and around 105 people die every minute.                                                                                                    The odds of dying from heart disease or a stroke are about 1 in 3, making it the leading cause of death globally.                                                           On average, people spend about 26 years of their life sleeping. Thats almost one-third of their entire lifespan.                                                                                        Each year, around 56 million people die worldwide. That's equivalent to the entire population of a large country like South Africa or Italy.                                                                                  Approximately 2 people die every second, and about 105 die every minute. Meanwhile, around 4 babies are born every second, showcasing the constant cycle of life and death.                                                                      The human body is made up of about 37 trillion cells, and every day, billions of these cells die and are replaced by new ones. Its a constant reminder of the ongoing process of renewal and decay within our bodies.                                                                Over 60% of people dont have a will, meaning they havent legally decided how their assets will be distributed after their death, highlighting the common avoidance of confronting mortality.                                                                                                   The odds of dying in a car accident over the course of a lifetime are about 1 in 102, making it a significant risk factor in daily life.                                                                                                  The average funeral costs thousands of dollars, with many people unprepared for these expenses, emphasizing the importance of planning for the inevitable.                                                                                                   In the time it took you to read this list, several people around the world have passed away, underlining the relentless and impartial nature of mortality.");
  
  let opacity;
}

function draw() {
  

  background(0,20);
  x = x + xSpeed
  
  fill(250)
  textStyle(BOLD)
  textFont('Times New Roman');
  textSize(30)
  text('Memento Mori',360,230)
  fill(50)
  textSize(10)
  textFont('Arial');
  textStyle(NORMAL)
  text('(press anywhere to enter.)', 400, width/2-40)
  
  fill(255)
  textSize(21)
  text(facts, 20, x ,300);
  
  clock();

  
  
  
}


function clock(posX,posY){
  //tick clock
  let angle = 0.2*sin(frameCount/30);
  push();
  translate(width/2, 0);
  noStroke();
  rotate(angle);
    
  fill(255)
  circle(0, 345,100)
  fill(0)
  triangle (0, 320, 0-3, 340, 0+3, 340)       //top hand
  triangle (0, 350, 0-3, 340, 0+3, 340)       //top hand
  triangle (0+1, 351, 0+10, 348, 0+10, 354)   //right hand
  triangle (0+10, 348, 0+10, 354, 0+20, 351)  //right hand
  noStroke()
  rectMode(CENTER)
  fill(255)
  //wide chains hole
  rect(0,height/2-175,20,40,200)
  rect(0,height/2-125,20,40,200)
  rect(0,height/2-75,20,40,200)
  rect(0,height/2-25,20,40,200)
  rect(0,height/2+25,20,40,200)
  rect(0,height/2+75,20,40,200)
  
  fill(0)
  rect(0,height/2-175,10,30,200)
  rect(0,height/2-125,10,30,200)
  rect(0,height/2-75,10,30,200)
  rect(0,height/2-25,10,30,200)
  rect(0,height/2+25,10,30,200)
  rect(0,height/2+75,10,30,200)
  
  fill(255)
    //wide chains
  rect(0,height/2-200,10,30,200)
  rect(0,height/2-150,10,30,200)
  rect(0,height/2-100,10,30,200)
  rect(0,height/2-50,10,30,200)
  rect(0,height/2,10,30,200)
  rect(0,height/2+50,10,30,200)
  pop();
}


