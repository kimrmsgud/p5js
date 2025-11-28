let recording = false;

function setup() {
  createCanvas(450, 300);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(20);
}

function draw() {
  let t = (sin(frameCount * 0.01) + 1) / 2;

  let sky1 = color(25, 80, 100);
  let sky2 = color(320, 50, 80);
  let skyColor = lerpColor(sky1, sky2, t);
  background(skyColor);

  noStroke();
  fill(25, 80, 100, 40);
  rect(0, 0, width, 200);

  fill(340, 50, 80, 35);
  rect(0, 0, width, 150);

  let sunY = 160 + sin(frameCount * 0.02) * 8;
  let sunSize = 140 + sin(frameCount * 0.03) * 8;

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
      let waveMove = sin(frameCount * 0.05 + x * 0.1 + row) * 4;
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
  let s1 = 8 + 3 * sin(frameCount * 0.04);
  let s2 = 6 + 2 * sin(frameCount * 0.05);
  ellipse(width / 2 - 30, 250, s1, s1);
  ellipse(width / 2 + 10, 255, s2, s2);

  // saveGif는 GitHub Pages에서 라이브러리 없을 수 있어서 주석 처리 추천
  // if (!recording) {
  //   recording = true;
  //   saveGif('김근형', 10);
  // }
}
