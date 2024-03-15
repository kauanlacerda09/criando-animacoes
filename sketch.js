function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(1000);
  }
  
  function draw(){
     circle(30, 20, 20);
  }
  
  function draw(){
    fill("red");
    circle(200, 200, 50);
  }
  
  function setup() {
  createCanvas(1000, 1000);
  background("blue");
  cor = "red";
  }
  
  function setup() {
  createCanvas(1000, 1000);
  background ("green")
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  }
  
  function draw() {
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical, 100);
    
  if(mouseX < posicaoHorizontal) {
  posicaoHorizontal--;
  }
    
  if(mouseX > posicaoHorizontal) {
  posicaoHorizontal++;
  }
  
  
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }
  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
  }