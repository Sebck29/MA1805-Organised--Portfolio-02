let hum; 
let img; 
let capture;

function preload(){
  hum = loadSound("humm.wav");
  img = loadImage('Antenna.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  image(img, 0, 0, windowWidth, 500);
  image(capture, 0, 0, 320, 240);
  filter(INVERT); 
    /* Try different filters: 
    INVERT, GRAY, THRESHOLD 
    OPAQUE, POSTERIZE BLUR
  */
}

function mouseClicked(){
  hum.loop();
  hum.amp(0.2); 
}