function setup() {
  createCanvas(450, 300);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop(); // 한 번만 그리기 (움직임 없음)
}

function draw() {
  // 애니메이션 대신 고정된 t 값 사용
  let t = 0.5;

  let sky1 = color(25, 80, 100);
  let sky2 = color(320, 50, 80);
  let skyColor = lerpColor(sky1, sky2, t);
  background(skyColor);

  noStroke();
  fill(25, 80, 100, 40);
  rect(0, 0, width, 200);

  fill(340, 50, 80, 35);
  rect(0, 0, width, 150);

  let sunY = 160;
  let sunSize = 140;

  fill(45, 90, 100);
  ellipse(width / 2, sunY, sunSize, sunSize);

  fill(25, 90, 100, 90);
  ellipse(width / 2, sunY, sunSize * 0.6, sunSize * 0.6);

  let sea1 = color(210, 80, 70);
  let sea2 = color(210, 80, 40);
  let seaColor = lerpColor(sea1, sea2, t);
  fill(seaColor);
  rect(0, 220, width, height - 220);

  stroke(0, 0, 100);
  strokeWeight(3);
  noFill();

  let y = 240;
  for (let row = 0; row < 3; row++) {
    beginShape();
    for (let x = 0; x <= width; x += 40) {
      let zigzag = (x / 40) % 2 === 0 ? -8 : 8;
      let waveMove = 0;
      vertex(x, y + zigzag + waveMove);
    }
    endShape();
    y += 20;
  }

  noStroke();
  let glowColor = lerpColor(
    color(50, 30, 100, 80),
    color(50, 10, 100, 0),
    t
  );
  fill(glowColor);
  let s1 = 8;
  let s2 = 6;
  ellipse(width / 2 - 30, 250, s1, s1);
  ellipse(width / 2 + 10, 255, s2, s2);
}
