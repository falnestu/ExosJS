var spanLevel = document.getElementById("current-level");
var spanLife = document.getElementById("lifes");

var buttonPlay = document.getElementById("play");
var buttonReplay = document.getElementById("replay");

var divHome = document.getElementById("home");
var divGame = document.getElementById("game");
var divResult = document.getElementById("result");

var divFinalLevel = document.getElementById("final-level");

var NB_COLORS = document.getElementById("colors").children.length;

var Color = {
	index : 0,
	color : "",
	sound : ""
}
var colorGreen = Object.create(Color);
	colorGreen.index = 0;
	colorGreen.color = document.getElementById("color-green");
	colorGreen.sound = document.getElementById("sound-green");

var colorRed = Object.create(Color);
	colorRed.index = 1;
	colorRed.color = document.getElementById("color-red");
	colorRed.sound = document.getElementById("sound-red");

var colorYellow = Object.create(Color);
	colorYellow.index = 2;
	colorYellow.color = document.getElementById("color-yellow");
	colorYellow.sound = document.getElementById("sound-yellow");

var colorBlue = Object.create(Color);
	colorBlue.index = 3;
	colorBlue.color = document.getElementById("color-blue");
	colorBlue.sound = document.getElementById("sound-blue");

var colors = [colorGreen,colorRed,colorYellow,colorBlue];

var TIMER = 600;
var game = {
	colorSequence : [],
	copySequence : [],
	level : 0,
	life : 3,
	computerPlaying : true,
	startGame : function() {
		this.colorSequence = [];
		this.copySequence = [];
		this.level = 0;
		this.life = 3;
		this.computerPlaying = true;
		this.nextLevel();
	},
	nextLevel : function() {
		this.level++;
		spanLevel.innerHTML = level;
		this.colorSequence.push(random(NB_COLORS));
		this.copy = this.colorSequence.slice(0);
		startSequence();
	},
	/*
	startSequence : function() {
		var idInterval = setInterval(showSequence,TIMER);
	},
	showSequence : function() {
		showColor(colorSequence[increment]);
		increment++;
		
		if (increment == this.colorSequence.length) {
			computerPlaying=false;
			increment=0;
			clearInterval(idInterval);
		}
	},
	*/
	startSequence : function() {
		var increment = 0;
		var idInterval = setInterval(function() {
			this.showColor(this.colorSequence[increment]);
			increment++;
			if (increment == this.colorSequence.length) {
				this.computerPlaying=false;
				increment=0;
				clearInterval(idInterval);
			}
		},TIMER);
	},
	showColor : function(indexColor) {
		var objColor = colors[indexColor];
		objColor.color.classList.add("active");
		objColor.sound.play();
		setTimeout(function(indexColor) {
			objColor.color.classList.remove("active");
		},TIMER/2, indexColor);
	},
	clickOnColor : function(e) {
		if (!computerPlaying) {
			var goodIndexColor = this.copySequence.shift();
			var clickColor = colors.filter(x => x.color == e.target);
			computerPlaying = (clickColor == colors[goodIndexColor]);
			this.checkClick();
		}
	},
	checkClick : function() {
		
	}
}




/* INIT CHANGEMENT ECRANS */
buttonPlay.addEventListener("click", function() {
	divHome.classList.remove("active");
	divGame.classList.add("active");
});

buttonReplay.addEventListener("click", function() {
	divResult.classList.remove("active");
	divGame.classList.add("active");
	game.startGame();
});

var endGame = function() {
	divGame.classList.remove("active");
	divResult.classList.add("active");
	divFinalLevel.innerHTML = game.level;
};
