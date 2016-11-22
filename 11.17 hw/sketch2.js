
var myData;
var globalData;

var url;
var baseUrl;
var city;
var APIkey;

var strCities = ["NewYork","Rockland","SanDiego","Seattle"];
var index = 0;

var imageObj;
var temperature;
var cloudNumber;
var mouseCounter =0;
function preload(){
	//load JSON formatted data from URL
	var url = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,ny&appid=89309063680894bde99f0b41e0e6ccbc";
	// var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json'
	myData = loadJSON(url);
	cloud = loadImage("cloud.svg");
	empire = loadImage("empire.jpg");
	rock = loadImage("rock.jpg");
	beach = loadImage("beach.png");
	rain = loadImage("rain.png");
}


function setup(){

	createCanvas(600,600);
	// background(200.5);
	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	//baseUrl = "http://netflixroulette.net/api/api.php?";
	city = "New York,ny";
	APIkey = "89309063680894bde99f0b41e0e6ccbc";

	url = baseUrl + "q=" + city + "&appid=" + APIkey;

	myData = loadJSON(url, gotData);
	imageObj = new Images();
}

function gotData(myData){
	// do something with this data
	globalData = myData;

	// console.log(globalData);
	temperature = globalData.main.temp;
	cloudNumber = globalData.clouds.all;
}

function draw(){


}

function mouseClicked(){
	index++;
	mouseCounter++;
	imageObj.drawCloud();
	url = baseUrl + "q=" + strCities[index] + "&appid=" + APIkey;

	myData = loadJSON(url, gotData);
	if(index > 3){
		index = 0;
	}
	if(mouseCounter >= 7){
		image(rain,20,20,width,height);
	}
	// console.log(temperature/2);
}

function keyReleased(){
	imageObj.drawElements();
}

function Images(){
	this.drawCloud = function(cloudNum){
		this.x = mouseX;
		this.y = mouseY;
		this.cloudNum = cloudNumber;
		if(cloudNumber < 20){
			// cloudNumber = 10;
			image(cloud,this.x,this.y,30,30);
		}
		else{
			fill(temperature/2);
			// console.log(temperature);
			// rect(this.x,this.y,cloudNumber,cloudNumber);
			image(cloud,this.x,this.y,cloudNumber,cloudNumber);

		}
	}
	this.drawElements = function(temp){
		this.x = mouseX;
		this.y = mouseY;
		this.temp = temperature/4;

		if(index == 0){
			image(empire,this.x,this.y,this.temp,this.temp);
		}
		else if(index == 1){
			image(rock,this.x,this.y,this.temp,this.temp);
		}
		else if(index == 2){
			image(beach,this.x,this.y,this.temp,this.temp);
		}
		else if(index == 3){
			image(rain,this.x,this.y,this.temp,this.temp);
		}
	}
}

