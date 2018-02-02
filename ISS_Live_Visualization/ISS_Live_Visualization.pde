// Scale: 1px = 31.855km
JSONObject json;
JSONObject iss_position;
String url = "http://api.open-notify.org/iss-now.json";
PImage earth;
PShape globe;
float angle = 0;
float r = 200;
float lat = 0;
float lon = 0;
float alt = 0;


void setup() {
  size(800,800, P3D);
  earth = loadImage("earth_texture.jpg");
  noStroke();
  globe = createShape(SPHERE,r);
  globe.setTexture(earth);
}

void draw () {
  background(51);
  lights();

  translate(width*0.5, height*0.5);
  rotateY(angle);
  
  fill(200);
  noStroke();
  //sphere(r);
  shape(globe);
  angle += 0.05;
  
  // Figure out a way to slow this down to querying API 5-10 times a second
  query_API();
  draw_ISS();
}

void query_API () {
  json = loadJSONObject(url);
  iss_position = json.getJSONObject("iss_position");
  lat = iss_position.getFloat("latitude");
  lon = iss_position.getFloat("longitude"); 
  println(lat);
  println(lon);
}

void draw_ISS () {
  float theta = radians(lat) + PI/2;
  float phi = radians(lon) + PI;
  float x = r*sin(theta)*cos(phi);
  float y = r*cos(theta);
  float z = r*sin(theta)*sin(phi);
  
  pushMatrix();
  translate(x+alt,y+alt,z+alt);
  fill(225,0,0);
  sphere(10);
  popMatrix();
}