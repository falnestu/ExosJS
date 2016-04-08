/**
  - faire un piano avec les fichiers audio
  - essaie d'utiliser une suite de touche logique
  - utilisr des input clavier
  - utilisr des input souris
*/

var Touch = function(){
	var _self = this;
	_self.touch = "";
	_self.transcript = "";
	_self.htmlElement = null;
	_self.sound = null;
}

Touch.prototype.active = function(){
	this.htmlElement.classList.add("active");
	this.sound.pause();
	this.sound.currentTime = 0;
	this.sound.play();
};

Touch.prototype.desactive = function(){
	console.log("remove active");
	this.htmlElement.classList.remove("active");
};

Touch.prototype.click = function(){
	this.htmlElement.classList.add("active");
	this.sound.pause();
	this.sound.currentTime = 0;
	this.sound.play();
	var that = this;
	setTimeout(function() {
		that.htmlElement.classList.remove("active");
	},400);
	
};


var audios = document.querySelectorAll("audio");
var piano = document.getElementById("piano");
var divTouch = piano.children;
var touchKeyboard = "FTGYHJIKOLPM";
var transcription = "cCdDefFgGaAb";

var touchC = new Touch(),
	touchCD = new Touch(),
	touchD = new Touch(),
	touchDE = new Touch(),
	touchE = new Touch(),
	touchF = new Touch(),
	touchFG = new Touch(),
	touchG = new Touch(),
	touchGA = new Touch(),
	touchA = new Touch(),
	touchAB = new Touch(),
	touchB = new Touch();
var clavier = [touchC, touchCD, touchD, touchDE, touchE, touchF, touchFG, touchG, touchGA, touchA, touchAB, touchB];

var clickMouse = function(event){
	var touch = clavier.filter(x => x.htmlElement == event.target)[0];
	touch.click();
}

for (var i = 0; i < divTouch.length; i++) {
	var touch = clavier[i];
	touch.touch = touchKeyboard[i];
	touch.transcript = transcription[i];
	touch.htmlElement = divTouch[i];
	divTouch[i].addEventListener("click", clickMouse);
	touch.sound = audios[i];
}

var handleKeyDown = function(event) {
	console.log(event.which);
	switch(event.which){
		case 70: //f
			touchC.active();
		break;
		case 71: //g
			touchD.active();
		break;
		case 72: //h
			touchE.active();
		break;
		case 74: //j
			touchF.active();
		break;
		case 75: //k
			touchG.active();
		break;
		case 76: //l
			touchA.active();
		break;
		case 77: //m
			touchB.active();
		break;
		case 84: //t
			touchCD.active();
		break;
		case 89: //y
			touchDE.active();
		break;
		case 73: //i
			touchFG.active();
		break;
		case 79: //o
			touchGA.active();
		break;
		case 80: //p
			touchAB.active();
		break;
	}
}

var handleKeyUp = function(event) {
	/*var touch = clavier.find(t => t.touch == String.fromCharCode(event.which));
	//console.log(touch);
	touch.desactive();*/
		switch(event.which){
		case 70: //f
			touchC.desactive();
		break;
		case 71: //g
			touchD.desactive();
		break;
		case 72: //h
			touchE.desactive();
		break;
		case 74: //j
			touchF.desactive();
		break;
		case 75: //k
			touchG.desactive();
		break;
		case 76: //l
			touchA.desactive();
		break;
		case 77: //m
			touchB.desactive();
		break;
		case 84: //t
			touchCD.desactive();
		break;
		case 89: //y
			touchDE.desactive();
		break;
		case 73: //i
			touchFG.desactive();
		break;
		case 79: //o
			touchGA.desactive();
		break;
		case 80: //p
			touchAB.desactive();
		break;
	}
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

/*var music = "fgafaAccdAaffcf";*/
var music = "eDeDebdcaceabeGbceeDeDebdca";
var timer = 400;
var tempo = [1,1,1,1,1,1,1,1,2,0,1,1,1,2,0,1,1,1,2,0,1,1,1,1,1,1,1,1,1,1];

/*var increment = 0;
var idInterval = setInterval(function() {
	var touch = clavier.filter(x => x.transcript == music[increment])[0];
	touch.click();
	console.log(touch.transcript);
	increment++;
	if (increment == music.length) {
		clearInterval(idInterval);
	}
}, timer);*/

var increment = 0;
var incrementTempo = 0;
var timer = 400;
var actionTodoLater = function(){
	var touch = clavier.filter(x => x.transcript == music[increment])[0];
	touch.click();
	console.log(touch.transcript);
	increment++;
	incrementTempo++;
	if(increment < music.length){
		if(tempo[incrementTempo] == 0) {
			timer =700;
			incrementTempo++;
			console.log("pause");
		} else {
			timer = 400;
		}
		setTimeout(actionTodoLater, timer);
	}
}
actionTodoLater();




