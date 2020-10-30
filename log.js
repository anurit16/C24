class Log{
    constructor(x,y,h,a){
        var option = {restitution:0.5,friction:0.7};
     this.body=Bodies.rectangle(x,y,20,h,option);
     Matter.Body.setAngle(this.body,a);
     World.add(myWorld,this.body);

     this.height = h;
    }

display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    strokeWeight (3);
    stroke("green");
    rect(0,0,20,this.height);
    pop ();

}

}

