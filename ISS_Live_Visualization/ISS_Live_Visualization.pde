JSONObject json;
JSONObject iss_position;
float angle = 0;
float r = 200;
float lat = 0;
float lon = 0;


void setup() {
  size(500,500, P3D);
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
  float y = r*sin(theta)*sin(phi);
  float z = r*cos(theta);
  translate(x,y,z);
  box(10);
}

void query_API () {
  json = loadJSONObject("http://api.open-notify.org/iss-now.json");
  iss_position = json.getJSONObject("iss_position");
  lat = iss_position.getFloat("latitude");
  lon = iss_position.getFloat("longitude"); 
  println(lat);
  println(lon);
}