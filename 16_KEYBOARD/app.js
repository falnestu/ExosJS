/*
### Exercices 1
- Crée une DIV avec l'id "color"
- Faire changer de couleur de fond a cette DIVà chaque fois qu'on appuie sur une numéro de 0 à 9
Tip : utiliser le switch
*/
var divColor = document.getElementById("color");

var handleKeyDownExo1 = function(event) {
	var color = "";
	switch(event.which){
		case 96:
		case 48: //0
			divColor.style.backgroundColor = "#C13535";
		break;
		case 97:
		case 49: //1
			divColor.style.backgroundColor = "#272E8C";
		break;
		case 98:
		case 50: //2
			divColor.style.backgroundColor = "#1D8073";
		break;
		case 99:
		case 51: //3
			divColor.style.backgroundColor = "#1B9F21";
		break;
		case 100:
		case 52: //4
			divColor.style.backgroundColor = "#788023";
		break;
		case 101:
		case 53: //5
			divColor.style.backgroundColor = "#C46464";
		break;
		case 102:
		case 54: //6
			divColor.style.backgroundColor = "#954FD6";
		break;
		case 103:
		case 55: //7
			divColor.style.backgroundColor = "#268832";
		break;
		case 104:
		case 56: //8
			divColor.style.backgroundColor = "#951C38";
		break;
		case 105:
		case 57: //9
			divColor.style.backgroundColor = "#55AEE6";
		break;
	}
}
var handleKeyUpExo1 = function(event) {
	switch(event.which){
		case 96:
		case 48: //0
		case 97:
		case 49: //1
		case 98:
		case 50: //2
		case 99:
		case 51: //3
		case 100:
		case 52: //4
		case 101:
		case 53: //5
		case 102:
		case 54: //6
		case 103:
		case 55: //7
		case 104:
		case 56: //8
		case 105:
		case 57: //9
			divColor.style.backgroundColor = "red";
		break;
	}
}
window.addEventListener("keydown", handleKeyDownExo1);
window.addEventListener("keyup", handleKeyUpExo1);

/*
### Exercices 2
- Crée 4 divs avec les id suivantes : "up, down, left, right"
- crée une class 'highlight' dans le CSS qui réduit l'opacité de l'élément
- Pour chaque div ajouter la classe 'highlight' quand une des touches directionel est enfoncée
- Pour chaque div retier la classe 'highlight' quand on relâche la touche
*/

var divUp = document.getElementById("up");
var divDown = document.getElementById("down");
var divLeft = document.getElementById("left");
var divRight = document.getElementById("right");

var handleKeyDownExo2 = function(event) {
	switch(event.which){
		case 38:
			divUp.classList.add("highlight");
		break;
		case 40:
			divDown.classList.add("highlight");
		break;
		case 37:
			divLeft.classList.add("highlight");
		break;
		case 39:
			divRight.classList.add("highlight");
		break;
	}
}
var handleKeyUpExo2 = function(event) {
	switch(event.which){
		case 38:
			divUp.classList.remove("highlight");
		break;
		case 40:
			divDown.classList.remove("highlight");
		break;
		case 37:
			divLeft.classList.remove("highlight");
		break;
		case 39:
			divRight.classList.remove("highlight");
		break;
	}
}

window.addEventListener("keydown", handleKeyDownExo2);
window.addEventListener("keyup", handleKeyUpExo2);

/*
### Exercices 3
- Enregistrer les touches du clavier
- crée une class "rounded" dans le fichier CSS
- Ajouter la class "rounded" à toutes les DIV quand on tape le mot "rounded".
Tip : Travailler avec les tableaux
*/
var allDiv = document.querySelectorAll("div");
var recordKeyboardEntries = "";
/*var rounded = [82,79,85,78,68,69,68];*/
var roundedWord = "rounded";
var handleKeyDownExo3 = function(event) {
	recordKeyboardEntries = recordKeyboardEntries.concat(String.fromCharCode(event.which));
	console.log(recordKeyboardEntries);
	if (recordKeyboardEntries.toLowerCase().includes(roundedWord)) {
		console.log("rounded");
		for (var i = 0; i < allDiv.length; i++) {
			allDiv[i].classList.toggle("rounded");
		}
	}
}
window.addEventListener("keydown", handleKeyDownExo3);


/*
### Exercices 4
- Crée une DIV avec l'id "character"
- Faire de sorte que lorsqu'on appuie sur les touches directionelles du clavier elle avance dans le sens de la flèche
Tip : Crée une variable pour incrémenter
*/
var divCharacter = document.getElementById("character");

var squarePositonX = 0;
var squarePositonY = 0;
var squareVelocityX = 10;
var squareVelocityY = 10;

var keyRightIsDown = false;
var keyLeftIsDown = false;
var keyUpIsDown = false;
var keyDownIsDown = false;

/* Mettre à jour sans le delay de repetition natif*/
var updated = setInterval(function(){
	if(keyRightIsDown){
		squarePositonX += squareVelocityX;
	}
	if(keyLeftIsDown){
		squarePositonX -= squareVelocityX;
	}
	if(keyUpIsDown){
		squarePositonY -= squareVelocityY;
	}
	if(keyDownIsDown){
		squarePositonY += squareVelocityY;
	}
	divCharacter.style.transform = "translate("+squarePositonX+"px,"+squarePositonY+"px)";
}, 1000/60);

var handleKeyDown = function(event) {
	console.log( "keydown : "+ event.which )
	switch(event.which){
		case 38:
		case 90:
			keyUpIsDown = true;
		break;
		case 40:
		case 83:
			keyDownIsDown = true;
		break;
		case 37:
		case 81:
			keyLeftIsDown = true;
		break;
		case 39:
		case 68:
			keyRightIsDown = true;
		break;
	}
}

var handleKeyUp = function(event) {
	console.log("keyup : " + event.which )
	switch(event.which){
		case 38:
		case 90:
			keyUpIsDown = false;
		break;
		case 40:
		case 83:
			keyDownIsDown = false;
		break;
		case 37:
		case 81:
			keyLeftIsDown = false;
		break;
		case 39:
		case 68:
			keyRightIsDown = false;
		break;
	}
}


window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);


/*
### Bonus Konami Code
- Sequence : Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
- Changer le fond du body en rose
*/
