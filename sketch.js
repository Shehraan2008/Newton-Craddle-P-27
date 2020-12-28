// Modules Aliases
const { Engine, World, Bodies, Body, Constraint } = Matter;

function setup() {
  createCanvas(600, 400);
  translate(300, 300);

  engine = Engine.create();
  world = engine.world;

  // Bodies
  b1 = new Bob(200, 300, 40);
  b2 = new Bob(240, 300, 40);
  b3 = new Bob(280, 300, 40);
  b4 = new Bob(320, 300, 40);
  b5 = new Bob(360, 300, 40);
  roof = new Roof(300 - 20, 100, width - 400, 30);
  r1 = new Rope(b1.body, roof.body, -40 * 20, 0);
  r2 = new Rope(b2.body, roof.body, -40 * 20, 0);
  r3 = new Rope(b3.body, roof.body, -40 * 20, 0);
  r4 = new Rope(b4.body, roof.body, -40 * 20, 0);
  r5 = new Rope(b5.body, roof.body, -40 * 20, 0);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  roof.show();
  r1.show();
  r2.show();
  r3.show();
  r4.show();
  r5.show();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(b1.body, b1.body.position, {
      x: 4,
      y: 0,
    });
  }
}
