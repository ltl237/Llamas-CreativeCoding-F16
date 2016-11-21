var myData;
var index;
var rectObj;
var temperature;
var strArray;
var url;
var root;
var api;
var weatherMain;
function preload(){
	root = "http://api.openweathermap.org/data/2.5/weather?q=";
	api = "&appid=0ddd5705acf924678dd5810004c1800a";
	query = "London"
	strArray = ["NewYork","Rockland","SanDiego","Charlotte"];
	index = 0;
	url = root + strArray[index] + api;
	myData = loadJSON(url);
	
}
function setup(){
	createCanvas(600,600);
	background(200);
	

}
function draw(){
	
}
 
function Rectangle(dataHeight){
	this.drawRect = function(){
		// this.dataHeight = temperature;
		this.x = mouseX;
		this.y = mouseY;
		rect(this.x,this.y,100,dataHeight/2);
	}
}

function mouseClicked(){
	index++;
	strArray = ["NewYork","Rockland","SanDiego","Charlotte"];
	url = root + strArray[index] + api;

	temperature = myData.main.temp;
	weatherMain = myData.main.humidity;
	if(weatherMain < 51){
		ellipse(mouseX,mouseY-20,30,30);
	}
	console.log(weatherMain);
	
	rectObj = new Rectangle(temperature);
	rectObj.drawRect();
	if(index > 4){
		index = 0;
	}
	console.log(url);
	console.log(temperature);
}
