// 얼굴 상태
let faceX, faceY;
let expressionMode = 1; // 1: 웃음, 2: 놀람, 3: 슬픔
let isBlushing = false;

function setup() {
  createCanvas(600, 400);
  faceX = width / 2;
  faceY = height / 2;
}

function draw() {
  background("tomato");
  face(faceX, faceY);
}

function keyPressed() {
  // 위치 이동
  if (keyCode === LEFT_ARROW) {
    faceX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    faceX += 10;
  } else if (keyCode === UP_ARROW) {
    faceY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    faceY += 10;
  }

  // 표정 변경
  if (key === '1') {
    expressionMode = 1;
  } else if (key === '2') {
    expressionMode = 2;
  } else if (key === '3') {
    expressionMode = 3;
  }
}

function mousePressed() {
  // 볼터치 on/off
  isBlushing = !isBlushing;
}

function face(x, y) {
  push();
  translate(x, y);
  strokeWeight(2);

  // 피부색
  let skinColor = color(252, 223, 202);
  fill(skinColor);

  // 귀
  ellipse(-140, 0, 50, 50);
  ellipse(140, 0, 50, 50);

  // 얼굴
  ellipse(0, 0, 280, 320);

  // 볼터치
  if (isBlushing) {
    noStroke();
    fill(255, 100, 100, 150);
    ellipse(-80, 50, 60, 40);
    ellipse(80, 50, 60, 40);
    stroke(0);
  }

  // 흰자
  fill("white");
  ellipse(-60, -20, 100, 100);
  ellipse(60, -20, 100, 100);

  // 마우스를 따라가는 눈동자
  let pupilLX = map(mouseX, 0, width, x - 75, x - 45, true) - x;
  let pupilLY = map(mouseY, 0, height, y - 35, y - 5, true) - y;
  let pupilRX = map(mouseX, 0, width, x + 45, x + 75, true) - x;
  let pupilRY = map(mouseY, 0, height, y - 35, y - 5, true) - y;

  fill("black");
  ellipse(pupilLX, pupilLY, 60, 60);
  ellipse(pupilRX, pupilRY, 60, 60);

  // 눈 하이라이트
  fill("white");
  noStroke();
  ellipse(pupilLX - 10, pupilLY - 10, 15, 15);
  ellipse(pupilRX - 10, pupilRY - 10, 15, 15);
  stroke(0);

  // 표정별 입/눈썹
  if (expressionMode === 1) {
    // 웃는 표정
    noFill();
    strokeWeight(5);
    arc(0, 70, 80, 60, 0, PI);
    strokeWeight(10);
    line(-90, -90, -30, -90);
    line(30, -90, 90, -90);
  } else if (expressionMode === 2) {
    // 놀란 표정
    fill("black");
    strokeWeight(5);
    ellipse(0, 80, 50, 60);
    strokeWeight(10);
    noFill();
    arc(-60, -100, 60, 40, PI, TWO_PI);
    arc(60, -100, 60, 40, PI, TWO_PI);
  } else if (expressionMode === 3) {
    // 슬픈 표정
    noFill();
    strokeWeight(5);
    arc(0, 90, 80, 60, PI, TWO_PI);
    strokeWeight(10);
    line(-90, -80, -30, -100);
    line(30, -100, 90, -80);
  }

  // 코
  strokeWeight(5);
  line(0, 45, -15, 35);
  line(0, 45, 15, 35);

  // 머리카락
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
