// var d = 350;
// var offset = 15;

function setup(){
  createCanvas(600,600);
  background(200);
}

function draw(){
  var x = 25;
  var y = 275;
  var sides = 300;
  fill(25);
  stroke(255);
  for (var i = 0; i < 16; i++) {//16 boxes
    //ellipse(width/2, height/2, d-(i*offset), d-(i*offset));
    rect(x,y,sides,sides);
    rect((x+12),(y+12),(sides-22),(sides-22));
    // rect(x,y,sides,sides);
    x += 12;
    y += 12;
    sides -= 22;
    if(sides <= 22){
      break;
    }
    if(x == 0 || y == 0){
      break;
    }
  };
  filter(BLUR,1);
}