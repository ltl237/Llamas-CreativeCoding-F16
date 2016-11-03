var ballArray = [];

function setup(){
	createCanvas(550,550);
	for(var i = 0; i < 5; i++){
		ballArray[i] = new Ball(random(0,width),random(0,height),3);
	}
	background(200);
}

function draw() {
	background(200);
	for(var i = 0; i < ballArray.length; i++){
		// fill(random(1,255));
		ballArray[i].display();
		ballArray[i].animate();
	}
}

function mouseClicked(){
	var anotherBall = new Ball(mouseX, mouseY, random(1,8));
	ballArray.push(anotherBall);
}

function keyPressed(){
	var keyBall = new Ball(mouseX, mouseY, random(1,8));
	ballArray.push(keyBall);
}

function Ball(x,y,velocity){
	this.x = x;
	this.y = y;
	this.vel = velocity;

	this.animate = function(){

		this.x += this.vel;
		if(this.x > width || this.x < 0){
			this.vel = -this.vel;
		}
		this.y += this.vel;
		if(this.y > width || this.y < 0){
			this.vel = -this.vel;
		}
	}

	this.display = function(){
		ellipse(this.x,this.y, 30,30);
	}


}