class Box{
    //intialize the object
    constructor(x,y){

        var options = {
            friction:1,
            density:1,
            restitution:0.4
        }

        this.body1 = Bodies.rectangle(x,y,50,50,options)
        this.width = 50;
        this.height = 50;
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