

var ballArray = [];
var theBoolLeft = false;
var theBoolRight = false;
counter = 0;
counterRight = 0;
function setup(){
	createCanvas(800,500);
	// for(var i = 0; i < 5; i++){
	// 	ballArray[i] = new Ball(random(0,width),random(0,height),3);
	// }
	back();
	// background(200);
}
function back(){
	push();
		fill(200);
		rect(0,0,width,height);
		fill(100,0,100);
		strokeWeight(5);
		rect(0,height/3,100,height/2.5);
		rect(700,height/3,100,height/2.5);
		stroke(255,0,0);
		rect(30,190,70,150);
		rect(700,190,70,150);
	pop();
}
function draw() {
	back();
	for(var i = 0; i < ballArray.length; i++){
		// fill(random(1,255));
		ballArray[i].display();
		ballArray[i].animate();
	}
	if(theBoolLeft == true){
		textSize(32);
		text(counter, 50, 150);
	}
	if(theBoolRight == true){
		textSize(32);
		text(counterRight, 750, 150);
	}
}

function mouseClicked(){
	var anotherBall = new Ball(mouseX, mouseY, random(3,9));
	ballArray.push(anotherBall);
}

// function keyPressed(){
// 	var keyBall = new Ball(mouseX, mouseY, random(1,8));
// 	ballArray.push(keyBall);
// }

function Ball(x,y,velocity){
	this.x = x;
	this.y = y;
	this.velX = random(3,7);
	this.velY = random(2,5);
	// this.counter = 0;
	this.animate = function(){

		this.x += this.velX;
		if(this.x > width || this.x < 0){
			this.velX = -this.velX;
		}

		this.y += this.velY;
		if(this.y > height || this.y < 0){
			this.velY = -this.velY;
		}

		if(this.x > 0 && this.x < 100 && this.y >300 && this.y <400){
			this.x = -100;
			theBoolLeft = true;
			counter++;
			back();			
		}
		if(this.x > 700 && this.x < 800 && this.y >300 && this.y <400){
			this.x = -100;
			theBoolRight = true;
			counterRight++;
			back();			
		}
	}

	this.display = function(){
		ellipse(this.x,this.y, 30,30);
	}
}



