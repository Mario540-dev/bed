class goku {
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            length:50,
            stiffness:0.06
        }
        this.dog = Constraint.create(options)
        World.add(world, this.dog);
    }
    display(){
        var gohan= this.dog.bodyA.position;
        var goten= this.dog.bodyB.position;
        line(gohan.x,gohan.y,goten.x,goten.y)
    }
    
}
