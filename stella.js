var d = 300;
var offset = 15;

function setup(){
  createCanvas(600,600);
  background(200);
}

function draw(){
  //ellipse(width/2, height/2, d, d);
  //ellipse(width/2, height/2, d-20, d-20);

  //for(start condition; exit condition; iterator){
  //  ellipse(width/2, height/2, d, d);
  //}

  for (var i = 0; i < 10; i++) {
    ellipse(width/2, height/2, d-(i*offset), d-(i*offset));
  }
}