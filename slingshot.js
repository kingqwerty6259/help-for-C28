class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.stretch = Constraint.create(options);
        World.add(world, this.stretch);
    }

    attach(body){
        this.stretch.bodyA=body
    }

    fly(){
        this.stretch.bodyA=null
    }

    display(){
        if(this.stretch.bodyA){
        var pointA = this.stretch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}