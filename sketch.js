const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var platform1;
var box1,ball;
var c1;
function preload(){


}

function setup(){
createCanvas(800,400)
    engine=Engine.create()
    world=engine.world;
    //platform1
      platform1=new Platform(400,300,250,10);
      box1=new Box(400,290,30,30);
      box2=new Box(370,290,30,30);
      box3=new Box(340,290,30,30);
      box4=new Box(310,290,30,30);
      box5=new Box(430,290,30,30);
      box6=new Box(460,290,30,30);
      box7=new Box(490,290,30,30);
      //platform 1 box row 2
      box8=new Box(325,240,30,30);
      box9=new Box(355,240,30,30);
      box10=new Box(385,240,30,30);
      box11=new Box(415,240,30,30);
      box12=new Box(445,240,30,30);
      box13=new Box(475,240,30,30);
      //platform 1 box row 3
      box14=new Box(340,210,30,30);
      box15=new Box(370,210,30,30);
      box16=new Box(400,210,30,30);
      box17=new Box(430,210,30,30);
      box18=new Box(460,210,30,30);
      //platform 1 box row 4
      box19=new Box(355,180,30,30);
      box20=new Box(385,180,30,30);
      box21=new Box(415,180,30,30);
      box22=new Box(445,180,30,30);
      //platform 1 box row 4
      box23=new Box(370,160,30,30);
      box24=new Box(400,160,30,30);
      box25=new Box(430,160,30,30);
      //platform 1 box row 5
      box26=new Box(385,130,30,30);
      box27=new Box(415,130,30,30);
     //platform 1 box row 5
      box28=new Box(400,100,30,30);
      //ball
     ball=new Ball(200,200,45);
     c1=new Chain(ball.body,{x:100,y:100});
}

function draw(){
background(214,214,214)
Engine.update(engine)
platform1.display();

//platform 1 boxes
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
//platform 1 box row 2
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
//platform 1 box row 3
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
//platform 1 box row 4
box19.display();
box20.display();
box21.display();
box22.display();
//platform 1 box row 5
box23.display();
box24.display();
box25.display();
//platform 1 box row 5
box26.display();
box27.display();
//platform 1 box row 6
box28.display();
//ball display
ball.display();


}


function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){

c1.fly();

}


function keyPressed(){
if(keyCode === 32){

c1.attach(ball.body);

}


}