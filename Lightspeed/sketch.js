var stars = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 150; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background('black')
  for (var i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].zoom(stars);
  }
}
