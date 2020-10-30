class Pig{
    constructor(x,y){
         var option = {restitution:0.5,friction:0.6}
         this.body = Bodies.rectangle(x,y,50,50,option);
         World.add(myWorld,this.body);
         


        }

        display(){
            var pos = this.body.position;
            var angle = this.body.angle;

            push ();
            translate (pos.x,pos.y);
            rotate (angle);
            rectMode(CENTER);
            fill ("green");
            rect(0,0,50,50);
            pop ();
        }
}