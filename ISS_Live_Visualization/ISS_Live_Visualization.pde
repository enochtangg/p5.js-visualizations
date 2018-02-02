// Scale: 1px = 31.855km
// 1. Radius of earth is 6371km which is drawn with 200px
// 2. Altitude of ISS is 408km which is draw with 12.8px from surface of earth
JSONObject json;
JSONObject iss_position;
float angle = 0;
float r = 200;
float lat = 0;
float lon = 0;


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
  angle += 0.03;
  
  query_API();
  //float theta = radians(lat) + PI/2;
  //float phi = radians(lon) + PI;
  
  //float x = r*sin(theta)*cos(phi);
  //float y = r*sin(theta)*sin(phi);
  //float z = r*cos(theta);
   
  float x = r*cos(lat)*cos(lon);
  float y = r*cos(lat)*sin(lon);
  float z = r*sin(lat);
  
  translate(x,y,z);
  sphere(30);
}

void query_API () {
  json = loadJSONObject("http://api.open-notify.org/iss-now.json");
  iss_position = json.getJSONObject("iss_position");
  lat = iss_position.getFloat("latitude");
  lon = iss_position.getFloat("longitude"); 
  println(lat);
  println(lon);
}