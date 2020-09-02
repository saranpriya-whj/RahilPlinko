const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;

var plinkos = [];
var divisions = [];
var balls = [];
var ground;
var divisionheight = 300;
var color;
//var h =50;

function setup() {
  createCanvas(600,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,30);

  Engine.run(engine);
}

function draw() {
  background(190);  
  
  if(frameCount%60===0){
    for(var i = 15;i<=width;i+=80){
      balls.push(new ball(10,25));
    }
  }
  

  for(var i = 15;i<=width;i+=80){
    divisions.push(new column(i,height - divisionheight/2,20,divisionheight));
  }

  for(var i = 15;i<=width;i+=80){
   // for (var j = 15;j<=i;j+=80){
    //plinkos.push(new plinko(i,h,20));
   // }
    //h+=10;
    plinkos.push(new plinko(i,150,20));
  }

  for(var i = 50;i<=width;i+=80){
    // for (var j = 15;j<=i;j+=80){
     //plinkos.push(new plinko(i,h,20));
    // }
     //h+=10;
     plinkos.push(new plinko(i,60,20));
   }

   for(var i = 30;i<=width;i+=80){
    // for (var j = 15;j<=i;j+=80){
     //plinkos.push(new plinko(i,h,20));
    // }
     //h+=10;
     plinkos.push(new plinko(i,330,20));
   }

   for(var i = 60;i<=width;i+=80){
    // for (var j = 15;j<=i;j+=80){
     //plinkos.push(new plinko(i,h,20));
    // }
     //h+=10;
     plinkos.push(new plinko(i,240,20));
   }

  for(var i in divisions){
    divisions[i].display();
  }


  for(var i in plinkos){
    plinkos[i].display();
  }

  for(var i in balls){
    balls[i].display();
  }

  

  ground.display();


  drawSprites();
}