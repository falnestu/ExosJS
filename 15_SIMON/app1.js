var buttonPlay = document.getElementById("play");
var buttonReplay = document.getElementById("replay");

var divHome = document.getElementById("home");
var divGame = document.getElementById("game");
var divResult = document.getElementById("result");

var divFinalLevel = document.getElementById("final-level");

/* INIT CHANGEMENT ECRANS */
buttonPlay.addEventListener("click", function() {
	divHome.classList.remove("active");
	divGame.classList.add("active");
});

buttonReplay.addEventListener("click", function() {
	divResult.classList.remove("active");
	divGame.classList.add("active");
});

var endGame = function() {
	divGame.classList.remove("active");
	divResult.classList.add("active");
	divFinalLevel.innerHTML = level;
};

/* MIS A JOUR VIES / LEVEL */
var spanLevel = document.getElementById("current-level");
var spanLife = document.getElementById("lifes");

var looseLife = function() {
	life--;
	spanLife.innerHTML = life;
	if (life > 0) {
		computerPlaying=true;
		increment=0;
		startSequence();
	} else {
		endGame();
	}
}

var increaseLevel = function() {
	level++;
	spanLevel.innerHTML = level;
	computerPlaying=true;
	increment=0;
	colorSequence.push(random(NB_COLORS));
}


/* JEU */
var divColors = document.getElementById("colors");
var sounds = document.querySelectorAll("audio");

var colors = divColors.children;
var NB_COLORS = colors.length;
var computerPlaying = true;
var activeColor = 0;
var increment = 0;
var life = 3;
var level = 0;
var colorSequence = [];
var TIMER = 600;
var idInterval = 0;

var random = function(max) {
	return Math.floor(Math.random() * max);
}

var findIndexColor = function(element) {
	var index = 0;
	var checkPrevious = function(element) {
		var previousElement = element.previousElementSibling;
		if (previousElement != null) {
			index++;
			console.log(index)
			checkPrevious(previousElement);
		}
	}
	checkPrevious(element);
	return index;
}

/* CheckCOLOR ON CLICK */	
var checkColor = function(event) {
	if (!computerPlaying) {
		var index = findIndexColor(event.target);
		console.log("click on : "+ index);
		showColor(index);
		/*console.log(event.target)*/
		if (event.target == colors[colorSequence[increment]]) {
			/*console.log("tu gagnes un point")*/
			increment++;
			if (increment == colorSequence.length) {
				increaseLevel();
				startSequence();
			}
		} else {
			/*console.log("tu perds une vie")*/
			looseLife();
		}
	}
}

for (var i = 0; i < colors.length; i++) {
	colors[i].addEventListener("click", checkColor);
}

/* Show Color during 300ms */
var showColor = function(indexColor) {
	colors[indexColor].classList.add("active");
	sounds[indexColor].play();
	setTimeout(function(indexColor) {
		colors[indexColor].classList.remove("active");
	},TIMER/2, indexColor);
}

/* Interval for repeat sequence */
var showSequence = function() {
	if (increment < colorSequence.length) {
		showColor(colorSequence[increment]);
		increment++;
	}
	else {
		computerPlaying=false;
		increment=0;
		clearInterval(idInterval);
	}
}

var startSequence = function() {
	console.log("startSequence");
	idInterval = setInterval(showSequence,TIMER);	
}

increaseLevel();
startSequence();

