var theScale = 1.0;
var minCounter = 0;
var redHue = 100;
var blueHue = 100;
var blurAmt = 0.5;
var transX = 0;
var transY = 0;
var circSize = 90;
// function preload(){
// 	img = loadImage("assets/sun.jpg");
// }


function setup(){
	createCanvas(800,600);
	background(200);
	// image(img,700,500);
	makeDude();
// 	textSize(32);
// 	text("Press key to fly",300,150);
// 	text("Press mouse to walk",300,100);
}

function draw(){	
	if(minCounter <= -10){
		drawLines();
		filter(BLUR,1);
	}
	push();
		stroke(0);
		fill(250,250,0);
		ellipse(770,20,200,200);
	pop();
	
	// quad(38, 31, 86, 20, 69, 63, 30, 76);

}

function makeDude(){
	// translate(transX,transY);

	background(200);
	ellipse(width/2,height/2,circSize,circSize);

}

function keyPressed(){
	// translate(transX,transY);
	fill(redHue,10,blueHue);
	theScale += 0.07;
	push();
		// scale(theScale,theScale);
		translate(transX,transY);
		makeDude();
	pop();
	transX += 20;
	transY -= 30;
	minCounter--;
	console.log(minCounter);
	filter(BLUR,blurAmt);
	redHue += 25;
	blueHue -= 25;
	blurAmt += 0.5;
	circSize += 20;
	console.log(circSize);
}

function mouseClicked(){
	// rotate(PI); 
	// translate(transX,transY);
	//^both don't work
	console.log(circSize);
	fill(redHue,10,blueHue);
	theScale -= 0.07;
	push();
		// scale(theScale,theScale);
		translate(transX,transY);
		makeDude();
	pop();
	transX -= 20;
	transY += 30;
	minCounter++;
	console.log(minCounter);
	filter(BLUR,blurAmt);
	blueHue += 25;
	redHue -= 25;
	blurAmt -= 0.5;
	circSize -= 20;
	// line(400,340,400,400);
	// line(400,400,430,430);
	// line(400,400,370,430);
}
function drawLines(){
	line(688,555,777,530);
	line(750,550,760,590);
	line(730,500,750,570);
	line(750,550,760,580);
	line(710,595,769,590);
	line(700,540,760,570);
	line(750,550,680,580);
	line(688,550,750,610);
	line(740,550,744,590);
	line(747,580,758,590);
}

