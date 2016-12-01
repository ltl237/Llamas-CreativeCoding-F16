var baseUrl;
var API_key;
var myTerms;
var url;
var globalData;
var counter;

var canvas;
var input;
var button;
var myInputValue;

function setup() {
 	counter=0
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(100,100);
	background(0);

	input = createInput("Enter search term ");
	input.position(580,250);
	button = createButton("submit");
	button.position(745,250);
	button.mousePressed(getVal);
	myInputValue = "";

	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
	API_key = "ba520563a24a493ca36f9b1f8c0f8c18"

	myTerms = ["roses", "tulip", "daisy", "banana", "doctor"]
	
	url = baseUrl + "?api-key="+ API_key + "&q=" + myInputValue;

	myData = loadJSON(url, gotData);
	getVal();
	textSize(32);
	text("Change me into a headline from NYTimes!", 50,50);
}

function gotData(myData){

	globalData = myData;
	console.log(globalData);

}

function getVal(){

	myInputValue = input.value();
	console.log(myInputValue);
	url = baseUrl + "?api-key="+ API_key + "&q=" + myInputValue;
	myData = loadJSON(url, gotData);
	background(255);

}

function draw() {
	textSize(20);
	background(255);
	
	offset = 30;

	if (globalData){
		for (var i=0; i<=3; i++){
			if(globalData.response.docs[i].abstract){
				//console.log(globalData.response.docs[i].abstract);
				text(globalData.response.docs[i].abstract, 10,50 + offset*i);
			}
		}	

	}
  
}
