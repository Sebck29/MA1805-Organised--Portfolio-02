let thetext = [" Display", "Text", "maybe"]
let word = thetext[0]
let i = 0;


function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

function draw() {
  background(220);


  //text display//
  
  textSize(50)
  text(word, 20, height/2);

  word = thetext[i]

  i=i+1
  if (i> thetext.length){
    i=0;
  }
  console.log(i)
}
