class Ball{
    constructor(x,y,r){
    var options={
    
        restitution:0.8,
        friction:0.5,
        density:0.7
    }
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    this.r=r;    
    this.image=loadImage("ball.png");
}
    display(){
    
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    imageMode(CENTER);
    image(this.image,0,0,50,50);
    //ellipse(0,0,this.r);
    pop();
    
    }
    
    }