//Name Spacing 
const Engine =Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var box1,box2,ground;
var box3,box4,box5;
var log1,log2,log3,log4;
var bird,pig1,pig2;


function setup() {
  createCanvas(1200,600);
  myEngine=Engine.create();
  myWorld = myEngine.world;

  //JSON format - JSON data structure

  ground = new Ground(600,590,1200,20);

  box1 = new Box(800,540,70,70);
  box2 = new Box(1000,540,70,70);
  pig1 = new Pig(900,540);
  log1 = new Log(900,500,280,PI/2);
  box3 = new Box(800,450,70,70);
  box4 = new Box(1000,450,70,70);
  pig2 = new Pig(900,450);
  log2 = new Log(900,410,280,PI/2);
  box5 = new Box(900,360,70,70);
  log3 = new Log(840,360,150,PI/7);
  log4 = new Log(960,360,150,-PI/7);
  bird = new Bird(200,100);
  //Engine.run(myEngine); run in setup, update in draw
}

function draw() {
  background(0);
  Engine.update(myEngine);
 ground.display(); 
  box1.display();
 box2.display();
 pig1.display();
 log1.display();
 box3.display();
 box4.display();
 pig2.display();
 log2.display();
 box5.display();
 log3.display();
 log4.display();
 bird.display();
}