function Particle() {
  this.x = random(width);
  this.y = random(height);
  this.ySpeed = random(-0.75,0.75);
  this.xSpeed = random(-0.75,0.75);

  this.show = function(particles) {
    //Draw each particle
    stroke(156, 159, 160);
    fill(156, 159, 160);
    ellipse(this.x, this.y, 5, 5);

    //Draws Connections
    for (var i = 0; i <particles.length; i++) {
      var distance = dist(this.x, this.y, particles[i].x, particles[i].y)
      var strength = map(distance, 0, 100, 3, 0)
      if (distance < 100) {
        stroke(156, 159, 160);
        strokeWeight(strength);
        line(this.x, this.y, particles[i].x, particles[i].y)
      }
    }
  }

  this.mouseConnection = function(particles) {
    for (var i = 0; i < particles.length; i++) {
      var distance = dist(this.x, this.y, mouseX, mouseY)
      var strength = map(distance, 0, 130, 2, 0)
      if (distance < 130) {
        stroke(156, 159, 160);
        strokeWeight(strength);
        line(this.x, this.y, mouseX, mouseY)
      }
    }
  }

  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    //Bounce off walls
    if (this.x > width || this.x < 0) {
      this.xSpeed = -this.xSpeed;
    }
    else if (this.y > height || this.y < 0) {
      this.ySpeed = -this.ySpeed;
    }
  }
}
