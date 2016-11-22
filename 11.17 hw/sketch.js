var myData;
var index;
var rectObj;
var temperature;
var strArray;
var url;
var root;
var api;
var globalData;
function preload(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,ny&appid=89309063680894bde99f0b41e0e6ccbc";
	myData = loadJSON(url);
	
}
function setup(){
	createCanvas(600,600);
	background(200);

	root = "http://api.openweathermap.org/data/2.5/weather?q=";
	api = "&appid=0ddd5705acf924678dd5810004c1800a";
	strArray = ["NewYork","Rockland","SanDiego","Charlotte"];
	url = root + strArray[index] + api;
	myData = loadJSON(url,gotData);
}
function draw(){
	
}

function gotData(myData){
	globalData = myData;
}

function mouseClicked(){
	index++;
	url = root + strArray[index] + api;
	myData = loadJSON(url,gotData);
	
	rectObj = new Rectangle(temperature);
	rectObj.drawRect();
	if(index > 4){
		index = 0;
	}
	console.log(url);
	console.log(index);
	console.log(strArray[index]);
}

function Rectangle(dataHeight){
	this.drawRect = function(){
		// this.dataHeight = temperature;
		this.x = mouseX;
		this.y = mouseY;
		rect(this.x,this.y,100,dataHeight/2);
	}
}
