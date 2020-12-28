// Modules Aliases
const { Engine, World, Bodies, Body, Constraint } = Matter;

// Force Value
let forceX, xSlide;

function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(width / 2, height / 4, width / 4, 20);
  // Bodies
  b1 = new Bob(width / 2 - 40 * 2, height / 10 + 400, 40);
  b2 = new Bob(width / 2 - 40 * 1, height / 10 + 400, 40);
  b3 = new Bob(width / 2, height / 10 + 400, 40);
  b4 = new Bob(width / 2 + 40 * 1, height / 10 + 400, 40);
  b5 = new Bob(width / 2 + 40 * 2, height / 10 + 400, 40);

  r1 = new Rope(b1.body, roof.body, -40 * 2, 0);
  r2 = new Rope(b2.body, roof.body, -40 * 1, 0);
  r3 = new Rope(b3.body, roof.body, 0, 0);
  r4 = new Rope(b4.body, roof.body, 40 * 1, 0);
  r5 = new Rope(b5.body, roof.body, 40 * 2, 0);

  //Slider
  xSlide = createSlider(0, 85, 35);
  xSlide.position(10, 10);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(225, 198, 153);
  // Showing the Objects
  r1.show();
  r2.show();
  r3.show();
  r4.show();
  r5.show();
  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  roof.show();

  // Slider Value
  forceX = xSlide.value();

  // Some Annotations

  // Force
  fill("Orange");
  textSize(20);
  text("Force To Excert", -490, -90);

  // Intructions
  fill("White");
  text("Press UP_ARROW to Start the craddle and restrat it.", -230, 400);

  // Title
  textSize(55);
  fill("blue");
  textStyle(BOLD);
  text("Newton's Craddle", -200, -70);
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(b1.body, b1.body.position, {
      x: forceX * -1,
      y: -41,
    });
  }
}
