var buttonPlay = document.getElementById("play");
var buttonReplay = document.getElementById("replay");

var divHome = document.getElementById("home");
var divGame = document.getElementById("game");
var divResult = document.getElementById("result");

var spanLevel = document.getElementById("current-level");
var spanLife = document.getElementById("lifes");

var divColors = document.getElementById("colors");
var colors = divColors.children;
var NB_COLORS = colors.length;

var sounds = document.querySelectorAll("audio");

var computerPlaying = true;
var points = 0;
var activeColor = 0;
var increment = 0;
var idInterval = 0;
var life = 3;
var level = 1;


var random = function(max) {
	return Math.floor(Math.random() * max);
}

var sequence = [];

/* INIT CHANGEMENT ECRANS */
buttonPlay.addEventListener("click", function() {
	divHome.classList.remove("active");
	divGame.classList.add("active");
});

buttonReplay.addEventListener("click", function() {
	divResult.classList.remove("active");
	divHome.classList.add("active");
});

var endGame = function() {
	divGame.classList.remove("active");
	divResult.classList.add("active");
};

var nextLevel = function() {
	sequence.push(random(NB_COLORS));
	idInterval = setInterval(showSequence,1500);
}

/* CheckCOLOR ON CLICK */	
var checkColor = function(event) {
	if (!computerPlaying) {
		console.log(event.target)
		if (event.target == colors[sequence[increment]]) {
			console.log("tu gagnes un point")
			points++;
			increment++;
			if (increment == sequence.length) {
				level++;
				computerPlaying=true;
				nextLevel();
				increment=0;
			}
		} else {
			console.log("tu perds une vie")
			life--;
			computerPlaying = true;
			increment=0;
			showSequence();
		}
	}
}

for (var i = 0; i < colors.length; i++) {
	colors[i].addEventListener("click", checkColor);
}

/* Show Color during 1000ms */
var showColor = function(indexColor) {
	colors[indexColor].classList.add("active");
	sounds[indexColor].play();
	setTimeout(function(indexColor) {
		colors[indexColor].classList.remove("active");
	},1000, indexColor);
}

/* Interval for repeat sequence */
var showSequence = function() {
	if (increment < sequence.length) {
		console.log(increment);
		showColor(sequence[increment]);
		increment++;
	}
	else {
		computerPlaying=false;
		increment=0;
		clearInterval(idInterval);
	}
}


/*var showSequence = function() {
	for (var i = 0; i < sequence.length; i++) {
		console.log(i);
		showColor(sequence[i]);
	}
	computerPlaying=false;
	clearInterval(idInterval);
}*/



nextLevel();