const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  var static_ground = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 375, 400, 50, static_ground);
  World.add(world, ground);
  ball = Bodies.circle(200, 200, 20, {restitution: 1.5});
  World.add(world, ball);
  console.log(ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 50); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}