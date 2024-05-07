
let img;
let cam;
let n=40;
function preload(){
  img = loadImage("assets/mewo.png");
}
function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  cam= createCapture(VIDEO);
  cam.hide();
  background(255);
}
function draw() {
  cam.loadPixels();
  for(let x = 0, x < cam.width ; x = x + n ){
    for(let x = 0, x < cam.height ; y = y + n ){
      let index = x + y * cam.width;
      let r= cam.pixels[index+0];
      let g= cam.pixels[index+1];
      let b= cam.pixels[index+2];

    fill(r,g,b);
    noStroke();
    rect(x,y,20,20);
  }
}
}
 /// image(cam, 0, 0);
//  cam.loadPixels();

//   for (let n=0; n<10; n++){
//     let x = random(cam.width);
//     let y random(cam.height);
//     let c = img.get(x,y);
//     fill(c);
//     noStroke();
//     circle(mouseX,mouseY,random(1,30));
// }
// }

  
    // for (let n=0; n<10; n++){
  //   let x = random(width);
  //   let y random(height);
  //   let c = img.get(x,y);
  //   fill(c);
  //   noStroke();
  //   circle(mouseX,mouseY,10);
  // }
