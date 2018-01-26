var particles = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 40; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  background(35, 45, 49);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show(particles);
    particles[i].move();
    particles[i].mouseConnection(particles);
  }
}
