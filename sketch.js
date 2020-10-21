
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,leftwall,rightwall,bottomwall,leftsprite,rightsprite,bottomsprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
 createCanvas(800, 700);
 rectMode(CENTER);
	

	ball=createSprite(width/2, 80, 10,10);
	ball.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 bottomwall=Bodies.rectangle(width/2,640,200,20,{isStatic:true} );
	 World.add(world, bottomwall);
	 bottomsprite=createSprite(bottomwall.position.x,bottomwall.position.y,200,20)
	 bottomsprite.shapeColor="red";
	 
	 rightwall=Bodies.rectangle(width/2+100,580,20,100,{isStatic:true} );
	 World.add(world, rightwall);
	 rightsprite=createSprite(rightwall.position.x,rightwall.position.y,20,100)
	 rightsprite.shapeColor="red";
	 
	 leftwall=Bodies.rectangle(width/2-100,580,20,100,{isStatic:true} );
	 World.add(world, leftwall);
	 leftsprite=createSprite(leftwall.position.x,leftwall.position.y,20,100)
	 leftsprite.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
drawSprites();
 
}

function keyPressed() {
 if (keyCode===UP_ARROW) {
   Matter.Body.applyForce(ball.body,ball.body.position(X=85,Y=-85));
  }
 
  }
  




