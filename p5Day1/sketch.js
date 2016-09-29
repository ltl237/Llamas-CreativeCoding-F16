function setup() {
	createCanvas(600,500);
	background(200);
}

function draw() {
  line(width/2,0,width/2, height);
  
  if(mouseX <= 300 && mouseY <= 166){
    if(mouseIsPressed){
      fill(255,0,0);
      rect(0,0,300,166);
    }
  }
  if(mouseX <= 300 && mouseY >166){
    if(mouseIsPressed){
      fill(0,0,255);
      rect(0,166,300,334);
    }
  }
  if(mouseX > 300 & mouseX < 500){
    if(mouseIsPressed){
      fill(100,0,100);
      rect(300,0,300,height);
    }
  }
  if(mouseX > 500){
    if(mousePressed){
      fill(255,255,255);
      rect(500,0,100,height);
    }
  }
}

function mousePressed(){

}