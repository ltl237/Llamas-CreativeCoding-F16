var shapeArr = [];

function setup(){
	createCanvas(600,600);
	background(200);
	// shapeArr[0] = new Shape(100, 100, 4);
	// for(var i = 0; i <= 6; i++){
	// 	shapeArr[i] = new Shape();
	// }
  	shapeArr[0] = new Shape(25,298,5);
  	shapeArr[1] = new Shape(105,298,5);
  	shapeArr[2] = new Shape(183,298,5);
  	shapeArr[3] = new Shape(263,298,5);
  	shapeArr[4] = new Shape(342,298,5);
  	shapeArr[5] = new Shape(422,298,5);
  	shapeArr[6] = new Shape(500,298,5);

}

function preload(){
	piano = loadImage('piano.jpg');
	guitar1 = loadSound('guitar1.mp3');
	guitar2 = loadSound('guitar2.mp3');
	guitar3 = loadSound('guitar3.mp3');
}

function draw(){
	image(piano,0,0,width,height);
	for(var i = 0; i < shapeArr.length; i++){
		shapeArr[i].rectangle();
	}
	if(mouseIsPressed){
		if(mouseX > 24 && mouseX < 105){
			guitar1.setVolume(0.1);
			guitar1.play();
			shapeArr[0].animateY();
		}
		if(mouseX > 105 && mouseX < 183){
			guitar2.setVolume(0.1);
			guitar2.play();
			shapeArr[1].animateY();
		}
		if(mouseX > 183 && mouseX < 263){
			guitar3.setVolume(0.1);
			guitar3.play();
			shapeArr[2].animateY();
		}
		if(mouseX > 263 && mouseX < 342){
			guitar1.setVolume(0.1);
			guitar1.play();
			shapeArr[3].animateY();
		}
		if(mouseX > 342 && mouseX < 422){
			guitar2.setVolume(0.1);
			guitar2.play();
			shapeArr[4].animateY();
		}
		if(mouseX > 422 && mouseX < 500){
			guitar3.setVolume(0.1);
			guitar3.play();
			shapeArr[5].animateY();
		}
		if(mouseX > 500 && mouseX < width){
			guitar1.setVolume(0.1);
			guitar1.play();
			shapeArr[6].animateY();
		}
	}
}

function mouseClicked(){
	// guitar1.setVolume(0.8);
	// guitar1.play();
}

function Shape(sx,sy,velocity){
	this.x = sx;
	this.y = sy;
	this.vel = velocity;

	// this.animateX = function(){
	// 	this.x += this.vel;
	// 	if(this.x > 550 || this.x < 100){
	// 		this.vel = -this.vel;
	// 	}
	// }

	this.animateY = function(){
		
		for(var i = 0; i < 10; i++){
			this.y += this.vel;
			if(this.y > 550 || this.y < 298){
				this.vel = -this.vel;
			}
		}
	}


	this.rectangle = function(){
		fill(0,0,255);
		for(var i = 0; i < 7; i++){
			rect(this.x,this.y,70,130);
			// rect(105,298,70,130);
			// rect(183,298,70,130);
			// rect(263,298,70,130);
			// rect(342,298,70,130);
			// rect(422,298,70,130);
			// rect(500,298,70,130);

			// this.rx += 5;
		}	

	}
}

