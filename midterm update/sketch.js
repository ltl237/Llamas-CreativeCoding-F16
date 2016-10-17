var xSize = 200;
var ySize = 300;
var goku = true;
//ellipse
var circSize = 40;
var r = -1;
var circX = 400;
var circY = 250;
var clickCount = 0;
//characters
var goodX = 600;
var goodY = 400;
var badX = 100;
var badY = 350;
var transX = 0;
var transY = 0;
//aura
var aX = 350;
var aY = 390;
var imgX = 225;
var imgY = 275;


function preload(){
	normalGoku = loadImage("goku.png");
	SSGoku = loadImage("Goku_render.png");
	cell = loadImage("cell.png");
	frieza = loadImage("frieza.png");
	trunks = loadImage("trunks.png");
	goten = loadImage("goten.png");
	vegeta = loadImage("vegeta.png");
	chichi = loadImage("chichi.png");
	janemba = loadImage("janemba.png");
	kingkai = loadImage("kingkai.png");
	piccolo = loadImage("piccolo.png");
	roshi = loadImage("roshi.png");
	gohan = loadImage("gohan.png");
	arena = loadImage("arena.jpg");
	ssbomb = loadImage("ssjbomb.png");
	aura = loadImage("aura.png");
	damaged = loadImage("gokudamaged.png")
	// mySound = loadSound('ssj3.mp3'); next steps
}


function setup(){
	createCanvas(1000,650);
	// mySound.setVolume(0.1);
	// mySound.play();
	makeBomb();
	
	background(255);
		// filter(OPAQUE);

	image(arena,0,0,width,height);
	image(SSGoku, 300, 300, 350, 390);
	textSize(28);
	text("Press key to charge Spirit Bomb!",310,290);

}

function draw(){	
	if(clickCount >= 12){
		image(arena,0,0,width,height);
		image(ssbomb,0,0,350,390);
		image(frieza, badX +420, badY - 30, 200, 220);
		image(cell, badX+400, badY+80, 200, 250);
		image(janemba, badX+440, badY, 200, 250);
		textSize(28);
		text("You've defeated the enemies!",340,290);
		for(var i = 0; i < 50; i++){
			translate(transX,transY);
			ellipse(200, 200, 170, 170);
			transX += 1;
			transY += 1;
		}
		
	}

	if(clickCount <= -4){
		image(arena,0,0,width,height);
		image(damaged, 300,300,250,300);
		textSize(28);
		text("You have been defeated!", 340,290);
		image(frieza, badX +10, badY - 360, 300, 320);
		image(cell, badX+480, badY-30, 400, 450);
		image(janemba, badX-140, badY-100, 300, 350);
	}

}
function characters(){
	image(frieza, badX - 120, badY - 30, 200, 220);
	image(cell, badX, badY+80, 200, 250);
	image(piccolo, goodX + 200, goodY - 150, 170, 250);
	image(roshi, goodX + 50, goodY - 80, 170, 250);
	image(vegeta, goodX + 200, goodY, 150, 250);
	image(trunks, goodX - 100, goodY, 160, 250);
	image(goten, goodX + 220, goodY - 300, 160, 230);
	image(gohan, goodX, goodY, 160, 250);
	image(janemba, badX-40, badY-190, 200, 250);
}
function makeBomb(){
	// translate(transX,transY);

	// background(200);
	ellipse(circX,circY,circSize,circSize);

	
}

function makeAura(){
	push();
		translate(0,0);
		image(aura,imgX,imgY,aX, aY);
	pop();
}

function keyPressed(){
	
	textSize(20);
	text("Click friends for energy!", 300, 150);
	dispImg();
}

function mouseClicked(){
	background(255);
	dispImg();
	
	if(mouseX > 500 && mouseY >100){
		fill(0,100,255);
		makeBomb();
		makeAura();
		circSize += 25;
		circY -= 10;
		clickCount++;
		aX += 20;
		aY += 20;
		imgX -= 10;
		imgY -= 10;
	}
	if(mouseX < 300 && mouseY > 100){
		fill(0,100,255);
		makeBomb();
		makeAura();
		circSize -= 20;
		circY += 5;
		clickCount--;
		aX -=10;
		aY -=10;
		imgX += 5;
		imgY += 5;

	}

	// console.log("mouseX", mouseX);
	// console.log("mouseY", mouseY);
}

function dispImg(){
	background(255);
	image(arena,0,0,width,height);

	image(normalGoku, 300, 300, xSize, ySize);
	characters();
}



// var r = floor(Math.random()*2);
// r *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
// background(200);
// for(var i = 0; i < 10; i++){
// 	xSize += r;
// 	ySize += r;
// 	dispImg();
// 	console.log(r);
// }
// console.log(xSize);