// 43.6532° N, 79.3832° W
JSONObject json;
float angle = 0;
float r = 200;


void setup() {
  size(500,500, P3D);
  json = loadJSONObject("http://api.open-notify.org/iss-now.json");
  float lon = json.getFloat("iss_position.longitude");
  print(lon);
  // float timestamp = json.getFloat("timestamp");
  // print(timestamp);
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
 
  //float theta = radians(lat) + PI/2;
  //float phi = radians(lon) + PI;
  
  //float x = r*sin(theta)*cos(phi);
  //float y = -r*sin(theta)*sin(phi);
  //float z = r*cos(theta);
  //translate(x,y,z);
  //box(10);
}