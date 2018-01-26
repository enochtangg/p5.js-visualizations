function Drop() {

  this.x = random(width);
  this.y = random(-50, -400);
  this.z = random(0, 20);
  this.yspeed = map(this.z, 0, 20, 2, 12);
  this.grav = map(this.z, 0, 20, 0.01, 0.05)
  this.length = map(this.z, 0, 20, 5, 15);
  this.size = map(this.z, 0, 20, 1, 3);

  this.fall = function() {
    //Giving each drop a initial velocity
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + this.grav;

    //Recycling the drops
    if (this.y > height) {
      this.y = random(-50,-400);
      this.yspeed = map(this.z, 0, 20, 3, 9);
    }
  }

  this.show = function() {
    stroke(40, 131, 222);
    strokeWeight(this.size);
    line(this.x, this.y, this.x, this.y + this.length);
  }

  this.mouseUmbrella = function(drops) {
    for (var i = 0; i < drops.length; i++) {
      if (dist(mouseX, mouseY, drops[i].x, drops[i].y) < 60) {
        if (drops[i].x > mouseX) {
          drops[i].x += 0.1
        }
        else if (drops[i].x < mouseX) {
          drops[i].x -= 0.1
        }
      }
    }
  }
}
