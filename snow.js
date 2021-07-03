class Snow{
    constructor(x,y,w){
        var options = {
            density:0.2,
            isStatic:false,
            
        };
        this.x=x;
        this.y=y;
        this.w=w;
        this.body = Matter.Bodies.circle(x,y,w,options);
        Matter.World.add(world , this.body);
    };

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill('white');
        ellipse(0,0,this.w);
        pop();

    }
}