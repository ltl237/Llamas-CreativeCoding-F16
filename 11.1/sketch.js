// var x;
// var y;
var theRect;
var squareArray = [];

function setup(){
  createCanvas(600,600);
  // theRect = new Box(width/3, height/2, 30);
  background(200);

  squareArray[0] = new Box(width/3, height/2, 30);
  squareArray[1] = new Box(width/2, height/2, 60);
}

function draw(){
	background(200);

	for(var i = 0; i < squareArray.length; i++){

		squareArray[i].create();
		squareArray[i].animate();
	}

}


function Box(_x, _y, nSize){
	this.x = _x;
	this.y = _y;
	this.size = nSize;
	this.step = 2;
	this.minSize = nSize - 10; //20
	this.maxSize = nSize + 10; //70

	this.create = function(){
		rect(this.x,this.y,this.size,this.size);
	}
	this.animate = function(){
		// this.size += this.step;
		if(this.size < this.minSize || this.size > this.maxSize){
			this.size += this.step;
			this.step = this.step *-1;
		}
		else{
			this.size += this.step;
		}

	}
};