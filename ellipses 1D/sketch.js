//make a 1-dimensional row of shapes with a for loop
var d = 50;
var offset = 15;

function setup(){
  createCanvas(1000,600);
}

function draw(){
  for (var i = 0; i < 35; i+=5) {
    ellipse((width/2) + (i*offset), height/2, d, d);
  }
}