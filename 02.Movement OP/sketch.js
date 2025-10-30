
let i = 0;
function setup() {

createCanvas (400, 400)

}



function draw() {
  background(255); // Grey background

  //Face
  fill(255); // white fill for head
  stroke(255, 0, 0); // r, g, b
  circle(200, 200, 250)

  // eyes
  fill(255, 0, 0); // r, g, b
  circle(150, 150, 50); // left eye
  circle(250, 150, 50) // right eye
 
 
 
  // smile
  stroke(255, 0, 0); // red color for the stroke
  strokeWeight(10); // the thickness of the circle
  noFill(); // I discovered I dont actually need fill for the arc/smile
  arc(width / 2, height / 2 + 30 , 120, 100, i, PI); // smile
   
  


  //Increment i

  i = i+1;
}
