// Scale: If 1px = 31.855km
// 1. Then, the radius of earth is 6371km which is drawn with 200px
// 2. Then, the altitude of ISS is 408km which is draw with 12.8px from surface of earth
JSONObject json;
JSONObject iss_position;
float angle = 0;
float r = 200;
float lat = 0;
float lon = 0;
float alt = -12.8;


void setup() {
  size(800,800, P3D);
}

void draw () {
  background(51);
  lights();

  translate(width*0.5, height*0.5);
  rotateY(angle);
  
  fill(200);
  noStroke();
  sphere(r);
  angle += 0.05;
  
  query_API();
  float theta = radians(lat) + PI/2;
  float phi = radians(lon) + PI;
  
  float x = r*sin(theta)*cos(phi);
  float y = r*cos(theta);
  float z = r*sin(theta)*sin(phi);
  
  
  translate(x+alt,y+alt,z+alt);
  fill(225,0,0);
  sphere(10);
}

void query_API () {
  json = loadJSONObject("http://api.open-notify.org/iss-now.json");
  iss_position = json.getJSONObject("iss_position");
  lat = iss_position.getFloat("latitude");
  lon = iss_position.getFloat("longitude"); 
  println(lat);
  println(lon);
}