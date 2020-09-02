class plinko{
    constructor(x,y,size){
        var options = {
            isStatic:true,
            friction : 1,
            density : 1.2,
            restitution : 0
        }
        this.body = Bodies.circle(x,y,10,options);
        this.size = size;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

         push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(0,0,this.size,this.size);
        pop();
    }
}