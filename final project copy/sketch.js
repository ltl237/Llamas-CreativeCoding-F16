var puckArray = [];
var pX;
var pY;
var xSpeed;
var ySpeed;
var counter;
var hits = 0;
var hitRecord = 0;
var goals = 0;
var mouses = 2;

var pucksize = 30;
var sticksize = 40;
function setup(){
  createCanvas(800,600);
  background(0);
}
function preload(){
	bounce = loadSound('bounce.mp3');
	whack = loadSound('whack.mp3');
	splash = loadSound('splash.mp3');
}

function draw(){
	// console.log(mouseX);
	// console.log(mouseY);
	back();
	stick();
	for(var i = 0; i < puckArray.length; i++){
		// fill(random(1,255));
		puckArray[i].display();
		puckArray[i].animate();
	}
	
	if(mouseIsPressed){
		console.log(mouses);
		if(sticksize == 40 && mouses > 1){
			mouseclicked();
			mouses -=1;
		}
	}
	// push();
	// 	if(mouseIsPressed){
	// 		setInterval(5000,stickBigger);
	// 	}
	// 	// stickSmaller();
	// pop();
	
}

function stick(){

	var stickX = mouseX;
	var stickY = mouseY;
	var constrainO = 0;
	var constrainI = 0;
	constrainO = constrain(mouseX, width/2, width);
	constrainI = constrain(mouseX, width/2, width);
	push();
		fill(255,0,0);
		ellipse(constrainO,stickY, sticksize,sticksize);
		ellipse(constrainI,stickY, 16,16);
	pop();

}

function keyTyped(){
	if(key == 'a'){
		console.log(pX);
		var anotherPuck = new Puck(mouseX, mouseY, 2);
		puckArray.push(anotherPuck);
		push();
			fill(0,0,255);
			
		pop();
	}
}


function Puck(x,y,velocity){

	this.x = width/2;
	this.y = height/2;
	this.velX = 3;
	this.velY = 3;
	// this.counter = 0;
	this.animate = function(){
		// console.log(this.x, this.y);
		this.x += this.velX;
		if(this.x > width || this.x < 0){
			this.velX = -this.velX;
			if(this.x != -100){
				// bounceSound();
			}
		}

		this.y += this.velY;
		if(this.y > height || this.y < 0){
			this.velY = -this.velY;
			if(this.x != -100){
				// bounceSound();
			}
		}
		// var d = dist(this.x,this.y,mouseX+sticksize,mouseY+sticksize);

		if(this.x <= mouseX + sticksize/2 && this.x >= mouseX - sticksize/2 && this.y <= mouseY + sticksize/2 && this.y >= mouseY - sticksize/2){
		// if(d <= 20){
			if(sticksize > 40){
				sticksize -= 10;
			}
			whackSound();
			hits += 1;
			
			var rVelX = random(2,5);
			var rVelY = random(3,7);
			this.velX = -this.velX;
			this.velY = -this.velY;
			if(this.velX > 0){
				this.velX += rVelX;
			}
			if(this.velX < 0){
				this.velX -= rVelX;
			}
			if(this.velY > 0){
				this.velY += rVelY;
			}
			if(this.velY < 0){
				this.velY -= rVelY;
			}
		}

		// if(this.x > 0 && this.x < 100 && this.y >300 && this.y <400){
		// 	this.x = -100;
		// 	// theBoolLeft = true;
		// 	counter++;
		// 	back();			
		// }
		if(this.x > 760 && this.x < 800){
			if(this.y >275 && this.y <325){
				splashSound();
				this.x = -100;
				goals += 1;
				if(hits > hitRecord){
					hitRecord = hits;
				}
				pucksize -=5;
				if(pucksize <= 15){
					pucksize = 15;
				}
				sticksize = 40;
				// sticksize -=2;
				// if(sticksize <= 16){
				// 	sticksize = 16;
				// }
				hits = 0;
				mouses = 2;
				back();			
		}
	}
	}

	this.display = function(){
		push();
			fill(0,0,255);
			ellipse(this.x,this.y, pucksize,pucksize);
			textSize(32);
			// text(counter, 750, 150);
		pop();
	}
}

function back(){
	rect(10,10,780,580);
	//goal
	push();
		strokeWeight(5);
		stroke(5,20,225);
		rect(700,height/3,100,200);
	pop();
	push();
		strokeWeight(5);
		stroke(255,0,0);
		rect(750,275,50,50);
	pop();
	push();
		strokeWeight(5);
		stroke(0,0,255);
		line(width/2,0,width/2,height);
	pop();
	textSize(16);
	text('Hit Counter: ', (width/2)+10, 35);
	text(hits, (width/2)+40, 50);
	text('Hit Record: ', (width/5)+10, 35);
	text(hitRecord, (width/5)+40, 50);
	// text('Enemy Goals: ', 680, 135);
	// text(goals, 730, 150);
}

function mouseclicked(){
	sticksize = 100;
}
function stickSmaller(){
	sticksize = 40;
}

function bounceSound() {
	bounce.setVolume(0.1);
	bounce.play();
}
function splashSound() {
	splash.setVolume(0.1);
	splash.play();
}
function whackSound() {
	whack.setVolume(0.1);
	whack.play();
}