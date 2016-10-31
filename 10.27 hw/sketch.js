// var x;
// var velocity;
var ballObj;
var ball2;
function setup(){
	createCanvas(550,550);
	ballObj = new Shape(200,300);
	ball2 = new Shape(300,400);
	tangle = new Shape(100,100);
	background(200);
}

function draw(){
// background(200);
	ballObj.ballDisp();
	ballObj.animate();

	ball2.ballDisp();
	ball2.animate();

	tangle.rectDisp();
	tangle.animate();
	
	// animate();
	// ellipse(x,200,30,30);
}

// function animate(){
// 	x += velocity;
// }

function Shape(xVal,yVal){
	this.x = xVal;
	this.y = yVal;
	this.velocity = 5;
	this.vel2 = 3;
	this.sC = 0.5;

	this.animate = function(){
		this.x += this.velocity;
		this.y += this.vel2;
		this.sC += 0.1;
		if (this.x > 500 || this.x < 0)  {
			this.velocity = -this.velocity;
			this.sC -= 0.2;
		}
		if (this.y > 500 || this.y < 0)  {
			this.vel2 = -this.vel2;
			this.sC -= 0.2;
		}
		scale(this.sC,this.sC);
	}

	this.ballDisp = function(){
		fill(0,0,200);
		ellipse(this.x, this.y, 50, 50);

	}

	this.rectDisp = function() {
		fill(200,0,0);
		rect(this.x,this.y, 30,30);
	}
};