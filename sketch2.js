function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("tomato");
  face(width / 2, height / 2);
}

function face(x, y) {
  push();
  translate(x, y);
  strokeWeight(2);

  let skinColor = color(252, 223, 202);
  fill(skinColor);

  ellipse(-140, 0, 50, 50);
  ellipse(140, 0, 50, 50);

  ellipse(0, 0, 280, 320);

  fill("white");
  ellipse(-60, -20, 100, 100);
  ellipse(60, -20, 100, 100);

  fill("black");
  ellipse(-60, -20, 60, 60);
  ellipse(60, -20, 60, 60);

  fill("white");
  noStroke();
  ellipse(-70, -30, 15, 15);
  ellipse(50, -30, 15, 15);
  stroke(0);

  noFill();
  strokeWeight(5);
  arc(0, 70, 80, 60, 0, PI);

  strokeWeight(10);
  line(-90, -90, -30, -90);
  line(30, -90, 90, -90);

  strokeWeight(5);
  line(0, 45, -15, 35);
  line(0, 45, 15, 35);

  noStroke();
  fill("black");
  beginShape();
  let hairRadiusX = 140;
  let hairRadiusY = 90;
  let hairCenterY = -70;
  for (let angle = PI; angle <= TWO_PI; angle += 0.1) {
    let vx = hairRadiusX * cos(angle);
    let vy = hairRadiusY * sin(angle) + hairCenterY;
    vertex(vx, vy);
  }
  let spikes = 7;
  let spikeHeight = 15;
  let startX = hairRadiusX;
  let endX = -hairRadiusX;
  let bottomY = hairCenterY;
  let segmentWidth = (startX - endX) / (spikes * 2);
  for (let i = 0; i < spikes * 2; i++) {
    let currentX = startX - (i + 1) * segmentWidth;
    let currentY = bottomY;
    if (i % 2 === 0) currentY -= spikeHeight;
    vertex(currentX, currentY);
  }
  endShape(CLOSE);

  pop();
}
