class Slingshot{
    constructor(bodyX, pointY){
        var options = {
            bodyA:bodyX,
            pointB:pointY,
            stiffness:0.05,
            length:10
        }
        this.pointB = pointY
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    display(){
        if(this.Slingshot.bodyA){
       var pointA = this.Slingshot.bodyA.position
       var pointB = this.pointB
       strokeWeight(5)
       line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.Slingshot.bodyA = null
    }
}