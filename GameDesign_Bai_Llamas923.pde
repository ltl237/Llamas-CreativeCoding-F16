float xPos = random(0,500);
float yPos = random(0,500);

int prevClickX;
int prevClickY;
boolean overlap;

int col;

float badX = random(100,450);
float badY = random(100,450);
/* @pjs preload="collision-symbol.png"; */
PImage online;
//img = loadImage("collision-symbol.png");
//image(img, 0, 0);

void setup(){
  //img = loadImage("collision-symbol.png");
  //image(img,0,0);
  size(500,500);
  background(0,0,0);
  String url = "http://pix.iemoji.com/images/emoji/apple/ios-9/256/collision-symbol.png";
  online = loadImage(url, "png");
  color[] colarray = new color[3];
  colarray[0] = color(0,0,255);
  colarray[1] = color(255,0,0);
  colarray[2] = color(0,255,0);
  //random dots
  
  for(int i =0; i<15; i=i+1){
    noStroke();
    ellipse(random(20,480),random(20,480),30,30);
    col = color(colarray[(int)random(0,3)]);
    fill(col);
    //filter(BLUR,1);
  }
  fill(col);
  //filter(BLUR,1);
  ellipse(badX,badY,30,30);
    //white dots background
  for(int i =0; i<80; i=i+1){
    noStroke();
    ellipse(random(10,490),random(10,490),1,1);
    fill(255,255,255);
    }
    
    //yellow dots background
    for(int u =0; u<15; u=u+1){
    noStroke();
    ellipse(random(10,490),random(10,490),2,2);
    fill(255,255,0);
  }
}

//draw lines

void draw(){
  //image(img, 0, 0);
  stroke(255,255,255);
  strokeWeight(2);
  for(int i = 0; i < 4; i++){
    if (mousePressed == true && (mouseButton == LEFT)) {
      //line(mouseX, mouseY, pmouseX, pmouseY);
      ellipse(mouseX,mouseY,30,30);
      fill(255,255,255);
    }
  }

}

PImage webImg;
void mouseClicked(){
  //println(mouseX + " : " + mouseY);
  if(prevClickX==0){
    prevClickX=mouseX;
  }
  if(prevClickY==0){
    prevClickY=mouseY;
  }
  for(int i = 0; i < 4; i++){
    line(mouseX,mouseY, prevClickX, prevClickY);
    if((mouseX - 20) < badX && (mouseX + 20) > badX){
   
      if((mouseY-20) < badY && (mouseY + 20) > badY){
        fill(255,255,255);
        rect(0,0,500,500);
        image(online,0,0);
      }      
    }
    
  }
  prevClickX=mouseX;
  prevClickY=mouseY;
  if(prevClickX==0){
    prevClickX=mouseX;
  }
  
 //use boolean to stop, if color1 =! color2, line==false
  
}

//get color, merge into one...

//add background music
//import processing.sound.*;
//SoundFile file;

// void setup() {
//  size(640, 360);
//   background(255);

//   // Load a soundfile from the /data folder of the sketch and play it back
//  file = new SoundFile(this, "sample.mp3");
//  file.play();
//}      