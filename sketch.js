const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let world,engine

snowDrops = [];
flakes = [];

function preload(){
   bag = loadImage("snow2.jpg");

}
function setup() {
  createCanvas(1500,753);
 engine= Engine.create();
 world=engine.world;
  
}

function draw() {
  background(bag);  
  Engine.update(engine);
  if(frameCount % 30 ==0 ){
    snow = new Snow(random(1,1470),-10,20);
    snowDrops.push(snow);
  };
  for(i=0;i<snowDrops.length;i++){
    snowDrops[i].display();
  };
  if(frameCount % 60 ==0 ){
    flake = new Flake(random(1,1470),-10,20);
    flakes.push(flake);
  };
  for(x=0;x<flakes.length;x++){
    flakes[x].display();
  };
  drawSprites();
}