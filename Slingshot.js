class Slingshot{

    //bodyA = bird body = maulik
    //bodyB = log6 body 
    //pointB = fixed point x,y
    constructor(maulik, pointB){
        var options = {
            bodyA: maulik,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.chain.bodyA = null;
    }
    
}