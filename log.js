class Log{
    //intialize the object
    constructor(x,y,height,angle){

        var options = {
            friction:1,
            density:1,
            restitution:0.01
        }

        this.body1 = Bodies.rectangle(x,y,150,height,options)
        Matter.Body.setAngle(this.body1,angle);
        this.width = 150;
        this.height = height;
        World.add(world,this.body1)

    }
    display(){
        
        var pos = this.body1.position;
        push ();
        translate(pos.x,pos.y)
        rotate(this.body1.angle)
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop()
    }



}