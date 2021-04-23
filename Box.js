class Box{
constructor(x,y,w,h){
var options={

    restitution:0.3,
    friction:0.5,
    density:1
}
this.body=Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);
this.w=w;
this.h=h;
this.image= loadImage("box.jpg");
}
display(){

var angle = this.body.angle;
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
imageMode(CENTER);
image(this.image,0,0,30,30);
//rect(0,0,this.w,this.h);
pop();

}

}