class Flake{
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
        this.image = loadImage('snow4.webp');
    };

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,50,50);
        pop();

    }
}