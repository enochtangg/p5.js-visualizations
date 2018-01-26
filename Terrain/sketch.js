var cols, rows;
var scl = 20;
var w = 1280;
var h = 1000;

var flying = 0;

var z = [];

function setup() {
  createCanvas(640, 360, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x ++) {
    z[x] = [];
    for (var y = 0; y < rows; y++) {
      z[x][y] = 0; //Initializes all to 0
    }
  }
}

function draw() {
  flying -= 0.08;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      z[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(0);
  stroke(255);
  rotateX(PI/3);
  fill(200,200,200, 50);
  translate(-width/2-400, -height/2-100);

  //Drawing net of vertex in trangle formation
  for (var y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, z[x][y]);
      vertex(x*scl, (y+1)*scl, z[x][y+1]);
    }
    endShape();
  }
}
