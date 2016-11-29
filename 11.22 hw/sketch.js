var baseUrl;
var API_key;
var myTerms;
var url;
var globalData;
var counter;

function setup() {
 	counter=0
	createCanvas(windowWidth, windowHeight);

	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
	API_key = "ba520563a24a493ca36f9b1f8c0f8c18"

	myTerms = ["roses", "tulip", "daisy", "banana", "doctor"]
	
	url = baseUrl + "?api-key="+ API_key + "&q=" + myTerms[counter];

	myData = loadJSON(url, gotData);
	setInterval(getFruit,1500);

}

function gotData(myData){

	globalData = myData;
	console.log(globalData);

}

function getFruit(){

	counter++;
	if (counter > myTerms.length){
		counter = 0;
	}
	url = baseUrl + "?api-key="+ API_key + "&q=" + myTerms[counter];
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
				text(globalData.response.docs[i].abstract, 10,100 + offset*i);
			}
		}	

	}
  
}