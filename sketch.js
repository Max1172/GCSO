const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var speed,weight
var deformation

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1600,400);
  car = createSprite(650,200,50,50)
  speed = random(59,90);
  weight = random(400,100);
  var options = {
    isStatic : true
  }
  wall = Bodies.rectangle(50,350,2700,40,options);
  World.add(world,wall);
  deformation = 0.5*weight*speed*speed/22500
}

function draw() {
  background("black");
  Engine.update(engine);
  car.display();
  strokeWeight(4);
  rectMode(CENTER);
  rect(wall.position.x,wall.position.y,2700,40);
  text("Deformation:" + deformation,1000,40);
  drawSprites();
}