const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var house
var balloons,star,star1,star2,star3,star4,star5,star6,star7

function preload(){
  bg=loadImage("bg.jpg")
  bl=loadImage("ball.png")
  home=loadImage("house.png")
  bal=loadImage("balloon.png")
  bal1=loadImage("balloon1.png")
  bal2=loadImage("balloon2.png")
  bal3=loadImage("balloon3.png")
  bal4=loadImage("balloon4.png")
  bal5=loadImage("balloon5.png")
  
 
}


function setup() {
  createCanvas(600,600);
 


  engine = Engine.create();
  world = engine.world;

  house=createSprite(490,520,50,50)
  house.addImage(home)

  star=new Star(150,0,40,"star.png")
  star1=new Star(290,-30,40,"star1.png")
  star2=new Star(360,-20,40,"star2.png")
  star3=new Star(80,-50,40,"star3.png")
  star4=new Star(250,-30,40,"star4.png")
  star5=new Star(255,0,40,"star5.png")
  star6=new Star(450,-20,40,"star6.png")
  star7=new Star(350,-40,40,"star7.png")
  

  balloon= createImg("balloon.png")
	balloon.position(270,305)
	balloon.size(150,300)
	balloon.mouseClicked(Blower)
  
	balloon1= createImg("balloon1.png")
	balloon1.position(200,305)
	balloon1.size(150,300)
	balloon1.mouseClicked(Blower1)
	
	balloon2= createImg("balloon2.png")
	balloon2.position(100,305)
	balloon2.size(150,300)
	balloon2.mouseClicked(Blower2)
	
	balloon3= createImg("balloon3.png")
	balloon3.position(00,305)
	balloon3.size(150,300)
	balloon3.mouseClicked(Blower3)
	
	balloon4= createImg("balloon4.png")
	balloon4.position(-20,250)
	balloon4.size(300,180)
	balloon4.mouseClicked(Blower4)

	balloon5= createImg("balloon5.png")
	balloon5.position(-20,120)
	balloon5.size(300,180)
	balloon5.mouseClicked(Blower5)
  

  
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  drawSprites()
  
  star.display()
  star.fall()

  star1.display()
  star1.fall()

  star2.display()
  star2.fall()

  star3.display()
  star3.fall()

  star4.display()
  star4.fall()

  star5.display()
  star5.fall()

  star6.display()
  star6.fall()

  star7.display()
  star7.fall()
}


function Blower(){
  Matter.Body.applyForce(star.body,{x:0,y:0},{x:0,y:-0.08})
  
}
function Blower1(){
  Matter.Body.applyForce(star1.body,{x:0,y:0},{x:0,y:-0.08}) 
}
function Blower2(){
  Matter.Body.applyForce(star2.body,{x:0,y:0},{x:0,y:-0.08})
}
function Blower3(){
  Matter.Body.applyForce(star3.body,{x:0,y:0},{x:0,y:-0.08})
}
function Blower4(){
  Matter.Body.applyForce(star4.body,{x:0,y:0},{x:0.08,y:0}) 
}
function Blower5(){
  Matter.Body.applyForce(star5.body,{x:0,y:0},{x:-0.05,y:0})
}
