
size(500,500);


//face shape?
fill(255,173,90);
beginShape();
vertex(120,105);
vertex(123,315);
vertex(190,400);
vertex(340,400);
vertex(405,315);
vertex(405,105);
endShape();

strokeWeight(4);
fill(255,255,255);
//glasses rect(startx,starty,width,height)
//line(x1,y1,x2,y2)
rect(155,150,80,80);
rect(295,150,80,80);
line(235,180,295,180); //middle
line(120,180,153,180);//left
line(379,180,408,180);//right

//nose
strokeWeight(1);
fill(255,173,100);
triangle(235,270,265,205,295,270);                                              

//mouth
fill(225,120,100);
//rect(215,340,100,25);
arc(265, 325, 130, 70, 0, PI, CHORD);

//hair
strokeWeight(2);
fill(0,0,0);
triangle(117,150,155,100,117,100);                                              
ellipse(180,100,100,30);
ellipse(230,90,100,50);
triangle(150,85,205,100,230,70);
ellipse(280,85,100,60);
ellipse(320,85,100,60);
ellipse(350,85,100,60);
ellipse(380,85,100,60);