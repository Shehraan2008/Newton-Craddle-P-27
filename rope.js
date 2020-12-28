class Rope {
  constructor(bodyA, bodyB, xOff, yOff) {
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      pointB: { x: xOff, y: yOff },
      lenght: 50,
    };
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  show() {
    var posA = this.rope.bodyA.position;
    var posB = this.rope.bodyB.position;
    strokeWeight(4);
    stroke("white");
    line(posA.x, posA.y, posB.x, posB.y);
  }
}
