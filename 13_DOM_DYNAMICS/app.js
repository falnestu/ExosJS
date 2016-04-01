/* creation du damier */
var COLUMS = 10;
var ROWS = 10;
var WITDH_SCREEN = window.innerWidth;
var HEIGHT_SCREEN = window.innerHeight;
var WIDTH_CASE = Math.round(WITDH_SCREEN / COLUMS);
var HEIGHT_CASE = Math.round(HEIGHT_SCREEN / ROWS);

var random = function(max) {
	return Math.floor(Math.random() * max);
}

var randomColorHex = function() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var randomColorRGB = function() {
	var r = random(255);
	var g = random(255);
	var b = random(255);
	return "rgb("+r+","+g+","+b+")";
}
var randomColorRGBA = function() {
	var r = random(255);
	var g = random(255);
	var b = random(255);
	return "rgba("+r+","+g+","+b+","+ Math.random()+")";
}


var damier ="";
for (var i = 0; i < ROWS; i++) {
	for (var j = 0; j < COLUMS; j++) {
		var style = "style ='"
				+"width:"+WIDTH_CASE+"px;"
				+"height:"+HEIGHT_CASE+"px;"
				+"top:"+ i*HEIGHT_CASE +"px;"
				+"left:"+ j*WIDTH_CASE +"px;"
				+"background:"+randomColorRGB()+"'";
		/*damier += "<div class='case' id='"+ i + j +"'"+ style +"></div>";*/
		damier += "<div class='case' "+ style +"></div>";
	}
}

var myDiv = document.getElementById("container");
myDiv.innerHTML = damier;

var myAction = function() {
	/*var id = random(ROWS).toString() + random(COLUMS).toString();*/
	/*var div = document.getElementById(id);*/
	var divs = myDiv.children;
	var randIndex = random(divs.length);
	var div = divs[randIndex];
		div.style.background = randomColorRGB();
}

var destroyDiv = function(event) {
	var element = event.target;
	element.classList.add("animated","rotateOut");
	/*myDiv.removeChild(element);*/
}

var mesElements = myDiv.children;
for (var i = 0; i < mesElements.length; i++) {
	mesElements[i].addEventListener("click", destroyDiv);
}

var repeater = setInterval(myAction, 10);
