
let sound;
let confetti = [];
let blah = false;
let truth = false;
let light = false;
let mic;
let x = 0; 
let g=0;

function preload() {
  sound = loadSound('alone.mp3');
  sound2 = loadSound('lights.mp3');
  sound3 = loadSound('confetti.mp3');

}

  function setup() {
 // createCanvas(600, 400);
 let canvas = createCanvas(600, 400);
 canvas.id("p5-canvas");
 canvas.parent("p5-canvas-container");
    mic = new p5.AudioIn();
    mic.start();
    sound.play();

}

function draw() {


  
  let currentDate = new Date();
  let dateString = currentDate.toLocaleDateString();
  
  
  background(0,40);
  
  g = sin(frameCount/30)*10  // glowing
  
  e = sin(frameCount / 40) * 30;

  b = sin(frameCount / 2) * 3;
  z = sin(frameCount / 5) * 2;
  
  
  fill(255)
  textSize(25)
  textStyle(NORMAL)
  text('You find yourself in a dark place...', width/5 + e , height/2 -140)
  text('The only thing you can do is      ', width/6 + b, height/2 +150+ z)
  fill(255,0,0)


  text ('scream.', 418+b, 350+z)
  
  text ('scream.', 418+b, 350+z)

  
  textSize(200);
  fill(255);
  textStyle(BOLD)
  text(dateString, -260, 270);
    
  
  let level = mic.getLevel();
  let opacity = map(level, 0.0, 0.5, 255, 0);
  
  noStroke()
  fill(0)
  rect(0,0,75,400)                    // side hide cover
  ///////////////////////////////
  fill(0,opacity)
  rect(0,100,600,180)  
  fill(255)
  
    if (level > 0.5) {
    sound.stop();
    sound2.play();}
  
  if (truth || level > 0.5) {
    fill(0)
    rect(0,0,700)
    fill(255)
    push();
    rectMode(CENTER);
    rect(width/2,height/2-38,20,20,3)
    circle(width/2,height/2-20,30)
    fill(60)
    circle(width/2,height/2,50)
    fill(255, 246, 15,100)
    circle(width/2,height/2,50)
    fill(255, 246, 15,100)
    circle(width/2,height/2,40)
    fill(255, 246, 15, 70)
    circle(width/2,height/2,30)
    fill(237, 234, 130)
    circle(width/2,height/2,25)
    fill(250)
    circle(width/2,height/2,15)                //core
    
    rect(width/2,height/100,5,300)
    
    fill(255, 246, 15,20)
    circle(width/2,height/2,100+g) //glowing
    circle(width/2,height/2, 80+g) //glowing
    
    fill(100)
    textSize(15)
    text('We all die someday, take this moment to remember your mortality.',width/4-70,height/2+140)
    text('After you are done, try to find your center.',width/4,height/2+160)
    truth = true ;    
    pop();
  } 
  
   if (mouseX > width/2 - 15 && mouseX < width/2 + 15 && mouseY   >height/2 - 15 && mouseY < height/2 + 15 && mouseIsPressed) {
     sound2.stop()
     sound3.play()
   }
  
      // canvas size 600x400
  if (mouseIsPressed && mouseX > width/2 - 15 && mouseX < width/2 + 15 && mouseY   >height/2 - 15 && mouseY < height/2 + 15) {
    light = true;}
  
  
  if (light==true){
    fill(250)
    rect(0,0,700)
    fill(200)
    push();
    rectMode(CENTER);
    rect(width/2,height/2-38,20,20,3)
    fill(200)
    circle(width/2,height/2-20,30)
    fill(250)
    circle(width/2,height/2,50)
    fill(255, 246, 15,100)
    circle(width/2,height/2,50)
    fill(255, 246, 15,100)
    circle(width/2,height/2,40)
    fill(255, 238, 107, 70)
    circle(width/2,height/2,30)
    fill(255, 238, 107)
    circle(width/2,height/2,25)
    fill(250)
    circle(width/2,height/2,15)                //core
    
    fill(200)
    rect(width/2,height/100,5,300)
    
    fill(255, 246, 15,20)
    circle(width/2,height/2,100+g) //glowing
    circle(width/2,height/2, 80+g) //glowing
    
     fill(0)
     textSize(15)
     let awa;
     awa= str("Surprise! Don't forget to celebrate your life.")
     yay= str("It is precious and worth cherishing every moment. :) ")
     text(awa,width/4,height/2+130)
    light=true ; 
    pop();
    light=true
    
    //canvas 600,400
    
    fill (225)
    rect(width/2.5,350,120,30,10)
    fill(0)
    textSize(20)
    text('OK',width/2.1-3,height/2+172)
    
      if (mouseIsPressed) {
    for (let i = 0; i < 4; i++) {
      let newConfetti = {
        x: mouseX,
        y: mouseY,
        angle: random(TWO_PI),
        speed: random(1, 3),
        color: color(random(255), random(255), random(255),150)
      };
      confetti.push(newConfetti);
    }
    }
    for (let i = confetti.length - 1; i >= 0; i--) {
    let c = confetti[i];
    c.x += cos(c.angle) * c.speed;
    c.y += sin(c.angle) * c.speed;
    fill(c.color);
    circle(c.x, c.y, 8);
    if (c.x < 0 || c.x > width || c.y < 0 || c.y > height) {
    confetti.splice(i, 1);
    }
      
    if (light == true && mouseIsPressed && mouseX > 240 && mouseX < 360         && mouseY > 350 && mouseY < 380) {
    blah = true;
}
    if (blah==true){
    fill(0)
    rect(0,0,700)
    
    textSize(20)
    fill(255)
    text('but dont forget we all die too.',270,350)
    textSize(10)
    fill(255)
    text('so cherish it!',450,365)

    }
      
  }     
    
    
   }
}