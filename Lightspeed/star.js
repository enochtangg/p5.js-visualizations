function Star() {
  this.x = random(width);
  this.y = random(height);
  this.z = random(0, 20);
  this.size = 3
  this.warpSpeed = 0.1;

  this.show = function() {
    stroke('white');
    fill('white');
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.zoom = function(stars) {
    var x_origin = width/2;
    var y_origin = height/2;
    var yLineFromOrigin = y_origin - this.y;
    var xLineFromOrigin = x_origin - this.x;
    var yLineFromMouse = mouseY - this.y;
    var xLineFromMouse = mouseX - this.x;

    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
      this.y = this.y - yLineFromOrigin*this.warpSpeed;
      this.x = this.x - xLineFromOrigin*this.warpSpeed;
      this.size = this.size + this.warpSpeed*7;
    }
    else {
    //Mouse control
      this.y = this.y - yLineFromMouse*this.warpSpeed;
      this.x = this.x - xLineFromMouse*this.warpSpeed;
      this.size = this.size + this.warpSpeed*7;
    }

    //Recycle stars if out of the screen
    if (this.x > width || this.x < 0) {
      this.x = random(width);
      this.size = 1;
    }
    else if (this.y > height || this.y < 0) {
      this.y = random(height);
      this.size = 1;
    }
  }
}
