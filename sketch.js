const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,body1;

function setup(){
    createCanvas(1000,800);

    engine = Engine.create();
    world = engine.world;

    ground = Bodies.rectangle(500,780,1000,20,{isStatic:true});
    World.add(world,ground)

    box1 = new Box(700,700);
    box2 = new Box(800,700);

    log1 = new Log(750,600,20,PI/4)
    
    

  

}
function draw(){
    background("yellow");
    Engine.update(engine);

    rectMode(CENTER);
    fill("red")
    rect(ground.position.x,ground.position.y,1000,20);

    box1.display();
    box2.display();
    log1.display();

    

    

}

