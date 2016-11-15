var x = 0;
var y = 0;
var xspeed = 3;
var yspeed = 4;

function setup(){
  createCanvas(500, 500);
  background (25);
}

function preload(){
	bounce = loadSound('bounce.mp3');
}
function draw(){
	
	makeCircle();
	x = x + xspeed;
  	
	if (x > 500 || x < 0){
		xspeed = -xspeed;
		bounceSound();
	}

  	y = y + yspeed;

  	if (y > 500 || y < 0){
	 	  yspeed = -yspeed;
	 	  bounceSound();
  	}

  	if(mouseIsPressed && mouseX <){
  		xspeed++;
  	}
}



function makeCircle() {
	background(25);
  	ellipse (x, y, 100, 100);
}

function bounceSound() {
	bounce.setVolume(0.1);
	bounce.play();
}