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

var random = function(max) {
	return Math.floor(Math.random() * max);
}

var TIMER = 300;
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
		spanLife.innerHTML = this.life;
		this.computerPlaying = true;
		this.nextLevel();
	},
	nextLevel : function() {
		this.level++;
		spanLevel.innerHTML = this.level;
		this.colorSequence.push(random(NB_COLORS));
		this.startSequence();
	},
	startSequence : function() {
		var increment = 0;
		var that = this;
		this.copySequence = this.colorSequence.slice(0);
		var idInterval = setInterval(function() {
			that.showColor(that.colorSequence[increment]);
			increment++;
			if (increment == that.colorSequence.length) {
				that.computerPlaying=false;
				clearInterval(idInterval);
			}
		},TIMER*2);
	},
	showColor : function(indexColor) {
		var objColor = colors[indexColor];
		objColor.color.classList.add("active");
		objColor.sound.play();
		setTimeout(function(indexColor) {
			objColor.color.classList.remove("active");
		},TIMER, indexColor);
	},
	clickOnColor : function(e) {
		if (!game.computerPlaying) {
			var goodIndexColor = game.copySequence.shift();
			var clickColor = colors.filter(x => x.color == e.target);
			game.computerPlaying = (clickColor[0] != colors[goodIndexColor]);
			game.checkClick();
		}
	},
	checkClick : function() {
		if (!this.computerPlaying && this.copySequence.length == 0) {
			this.nextLevel();
		} else if (this.computerPlaying) {
			this.looseLife();
		}
	},
	looseLife : function() {
		this.life--;
		spanLife.innerHTML = this.life;
		if (this.life >= 0) {
			this.startSequence();
		} else {
			this.endGame();
		}
	},
	endGame : function() {
		divGame.classList.remove("active");
		divResult.classList.add("active");
		divFinalLevel.innerHTML = this.level;
	}
}

/* INIT CHANGEMENT ECRANS */
buttonPlay.addEventListener("click", function() {
	divHome.classList.remove("active");
	divGame.classList.add("active");
	game.startGame();
});

buttonReplay.addEventListener("click", function() {
	divResult.classList.remove("active");
	divGame.classList.add("active");
	game.startGame();
});

for (var i = 0; i < colors.length; i++) {
	/*colors[i].color.addEventListener("click", game.clickOnColor);*/
	colors[i].color.addEventListener("mouseup", function() {
		if (!game.computerPlaying) {
			this.classList.remove("active");
			game.clickOnColor(event);
		}
	});
	colors[i].color.addEventListener("mousedown", function(event) {
		if (!game.computerPlaying) {
			this.classList.add("active");
			var audio = event.target.firstElementChild;
			audio.play();
		}
	});
}