class Chain {
    constructor(bodyA, bodyB) {
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.05,
            length: 10
        }

        this.chain = Constraint.create(option);
        World.add(world, this.chain);
    }
    display() {
        var pointA = bodyA.chain.body.position;
        var pointB = bodyB.chain.boby.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}