var rotAmount;
var startX = 0;
var startY = 0;



function setup(){
  createCanvas(600,600);
  background(220);
}

function draw(){
	/* part one no loop */
	push(); 
	fill(255,0,0);

	//Move the entire new matrix down to the handle point
	translate(100,400);

	// rotAmount = map(mouseX, 0, width, 0, 2*PI);
	rotAmount = PI/3.0;
	rotate(rotAmount);

	//draw the geometry at (0,0) relative to the new matrix
	rect(0,0,40,40);

	pop(); 

	push();
	translate(400,100);
	//rotAmt = map(mouseX,0,width,0,2*PI);
	rotate(PI/4.0);
	fill(0,0,255);
	rect(100,100,40,40);

	pop();

	push();
	translate(220,220);
	rotAmount = PI/5.0;
	rotate(rotAmount);
	rect(50,150,60,60);
	pop();
  
  	for(var i = 0; i < 5; i++){
  		var underP = 3.0;
  		push();
		rotate(PI/underP); //why doesn't this rotate at different angles?
		fill(0,255,0);
		rect(startX,startY,40,40);
		pop();
		startX += 150;
		startY += 50;
		underP -= 1;
  	}



}