var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var area1,area2,area3;
var zombie1,zombie2,zombieIMG;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
	zombieIMG  = loadImage("zombie.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.1;
	

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;
	helicopterSprite.depth = 3;
	packageSprite.depth = helicopterSprite.depth - 6;
	
   zombie1 = createSprite(100,610,20,20);
   zombie1.addImage(zombieIMG);
   zombie1.scale = 0.3;
  
  

   zombie2 = createSprite(700,610,20,20);
   zombie2.addImage(zombieIMG);
   zombie2.scale = 0.3;
   
   
	
	

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.7, isStatic: true });
	World.add(world, packageBody);


	
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	area1 = Bodies.rectangle(400,650,200,20, { isStatic: true });
	World.add(world, area1);


	  area2 = Bodies.rectangle(305,610,20,100, { isStatic: true });
    	World.add(world, area2);


   area3 = Bodies.rectangle(505,610,20,100, { isStatic: true });
	World.add(world, area3);



   

	Engine.run(engine)

}


function draw() {
	
	
	background(0);
	

	fill("red");



	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,200,20);
	

	
	rectMode(CENTER);
	rect(area1.position.x,area1.position.y,200,20);
	
	rectMode(CENTER);
	rect(area2.position.x,area2.position.y,20,100);
	

	rectMode(CENTER);
    rect(area3.position.x,area3.position.y,20,100);
	

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	
   if(zombie1.isTouching(packageSprite)||zombie2.isTouching(packageSprite)){
	   textSize(14)
	   text("oh no !! the zombies got the package",400,350)
	   zombie1.velocityX = 0;
	   zombie2.velocityX = 0;
   }



     
	zombie1.bounce(zombie2)
	zombie2.bounce(zombie1);

	drawSprites();

	

}

function keyPressed() {

	


	if (keyCode === DOWN_ARROW) {

		Body.setStatic(packageBody, false);
		
	 

	}
}



