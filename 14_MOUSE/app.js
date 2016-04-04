/*### Exercices 1
- Crée 3 DIV possedant la même classe
- Les faire disparaitre lorsque l'on passe la souris dessus
Tip : utiliser le mouseenter  ou mouseover 
*/
var divsExo1 = document.querySelectorAll(".exo1");
for (var i = 0; i < divsExo1.length; i++) {
	divsExo1[i].addEventListener("mouseover", function(){
		for (var i = 0; i < divsExo1.length; i++) {
			divsExo1[i].classList.add("hidden");
		}
	});
/*	divsExo1[i].addEventListener("mouseout", function(){
		console.log("mouseOut");
		for (var i = 0; i < divsExo1.length; i++) {
			divsExo1[i].classList.remove("hidden");
		}
	});*/
}

/*
### Exercices 2
- Crée une DIV avec une l'id "reset"
- Faire de sorte que quand on clique dessus elle fasse réaparaitre les 3 divs premièrement créé
Tip : avec une animation une à une serait super cool
*/
var reset = document.getElementById("reset");
reset.addEventListener("click", function (){
	var i = 0;
	setInterval(function() {
		divsExo1[i].classList.remove("hidden");
		if (i<divsExo1.length) {
			i++;
		}
		
	}, 1000);
})


/*
### Exercices 3
- Crée 2 DIV avec une id chacune (axe X et Y)
- Faire de sorte que lorsque l'on bouge la souris, la position sois affiché dans les divs associés
Tip : Utiliser un objet {} serait vraiment approprié
*/
var positionMouse = {
	x : 0,
	y : 0,
	show : function() {
		console.log("x= "+this.x+" ; y= "+ this.y);
	}
}

var divposMouseX = document.getElementById("posMouseX");
var divposMouseY = document.getElementById("posMouseY");

var displayPosMouse = function(event) {
	positionMouse.x = event.clientX;
	positionMouse.y = event.clientY;
	divposMouseX.innerHTML = positionMouse.x;
	divposMouseY.innerHTML = positionMouse.y;
}


/*
### Exercices 4
- Crée 2 autres DIV avec une id chacune (axe X et Y)
- Calculez la positon de la souris par rapport au centre du document. 
	Donc le point x:0 et y:0 se trouve au centre si on déplace vers la gauche nous sommes a x:-1 et si on monte nous sommes a y:-1
- Faire de sorte que losrqu'on bouge la souris, sa position sois affiché dans les divs associés
Tip : Utiliser innerHTML ou innerText
*/
var posCenterWindow = {
	x : window.innerWidth / 2,
	y : window.innerHeight / 2
}

var positionMouseCenter = {
	x : 0,
	y : 0,
	show : function() {
		console.log("x= "+this.x+" ; y= "+ this.y);
	}
}

var divposMouseCenterX = document.getElementById("posMouseXCenter");
var divposMouseCenterY = document.getElementById("posMouseYCenter");

var displayPosMouseByCenter = function(event) {
	positionMouseCenter.x = event.clientX - posCenterWindow.x;
	positionMouseCenter.y = event.clientY - posCenterWindow.y;
	divposMouseCenterX.innerHTML = positionMouseCenter.x;
	divposMouseCenterY.innerHTML = positionMouseCenter.y;
}

window.addEventListener("mousemove", function(event) {
	displayPosMouse(event);
	displayPosMouseByCenter(event);
});

/*
### Bonus
- Crée une div avec l'id "droppable"
- Faire de sorte que : quand on clique dessus elle suive la position de la souris
- Tant que le clique de la souris est enfoncé, la div continue à suivre la position de la souris
- Quand on lâche le clique de la souris la DIV s'arrête de suivre
*/
var isClicking = false;
var clickPos = {
	x : 0,
	y : 0,
	show : function() {
		return "x= "+this.x+" ; y= "+ this.y;
	}
}
var divDroppable = document.getElementById("droppable");

divDroppable.addEventListener("mousedown",function(event) {
	console.log("begin drag");
	isClicking = true;
	clickPos.x = event.clientX;
	clickPos.y = event.clientY;
	console.log("click position = " +clickPos.show());
});

window.addEventListener("mouseup", function() {
	console.log("end drag");
	isClicking = false;
});

window.addEventListener("mousemove", function() {
	if (isClicking) {
		console.log("drag");
		positionMouse.show();
		divDroppable.style.transform = "translate("+ (positionMouse.x - clickPos.x) +"px,"+ (positionMouse.y - clickPos.y) +"px)";
	}
})