function setup() {
   let canvas = createCanvas(400, 200);
    canvas.parent("p5-container");
  }
  function draw() {
    background(0);
    worm(width/2, height/2);
  }
  function worm(x, y){
    noFill();
    push();
    translate(x, y);
    for(let i=0; i<400; i+=10){
      j = 20*sin((frameCount-i)/50);
      let s = map(i, 0, 400, 60, 6);
      stroke(255);
      circle(i/4,j,s);
    }
    pop();
  }