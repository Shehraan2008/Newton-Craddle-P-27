class Rope {
  constructor(bodyA, bodyB, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      pointB: { x: this.offsetX, y: this.offsetY },
    };
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  show() {
    var posA = this.rope.bodyA.position;
    var posB = this.rope.bodyB.position;
    strokeWeight(4);
    stroke("white");

    var thread1X = posA.x;
    var thread1Y = posA.y;

    var thread2X = posB.x + this.offsetX;
    var thread2Y = posB.y + this.offsetY;

    line(thread1X, thread1Y, thread2X, thread2Y);
  }
}
