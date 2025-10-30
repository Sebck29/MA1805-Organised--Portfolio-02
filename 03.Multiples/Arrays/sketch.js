function setup() {


    createcanvas (400, 400)

}
let select = 0;
let rgb = [255, 0, 0];


let words = [];


let numbers = [];

// Fill the arrays with values
words[0] = "what", "Are", "Arrays"; // Define 'what' at pos' 0
words[1] = "are"; // 

textsize(30);
text(select, 50, 50)

function setup() {
  createCanvas(windowWidth, windowHeight);
}





function draw() {
  
  
    if(select==0){
    rgb = [150, 190, 200];
  }else{
    rgb = [0, 255, 0];
  }
  fill(rgb);
  ellipse(mouseX, mouseY, 30);
}





function mouseClicked() {
  
  
    if(select==0){
    select=1;
  }else{
    select=0;
  }
  return false;
}
function Draw() {

    background(220)

    circle (50, 50, 50,)
    circle(50, 60, 50,)
    circle(50, 70, 50)

    for(let i=0; i<=100; i++) {
        circle(i, i, 30)
    }





}