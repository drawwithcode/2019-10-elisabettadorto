let heart;
let heart1;
let heart2;
let tx = 0;
let ty = 0;
let ct = 600;

function preload() {
  // Load models of the hearts
  heart = loadModel("assets/Heart.obj", true);
  heart1 = loadModel("assets/Heart.obj", true);
  heart2 = loadModel("assets/Heart.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  lights(); //directionalLight
  normalMaterial(); // For skin color effect

}

function draw() {
  background(255, 20, 147);
  normalMaterial(); // For skin color effect
  scale(0.5); // Scaled to make model fit better in canvas

  //first heaart from sx
  rotateZ(90 + mouseX);
  rotateY(90 + mouseY);
  smooth();
  translate(ct, 0, 20);
  push();
  translate(0, 0, 0);
  rotateX(90);
  rotateZ(90 + frameCount * 1);
  model(heart);
  pop()
  push();

  //middle heart
  translate(0, 0, -150);
  rotateX(90);
  rotateZ(90 + frameCount * 1);
  model(heart1);
  pop()
  push();

  //third heart
  translate(0, 0, -300);
  rotateX(-90);
  rotateZ(90 - frameCount * 1);
  model(heart2);
  pop()
  ct -= 10;
  if (ct < -240) {
    ct = 1600;
  }

}
