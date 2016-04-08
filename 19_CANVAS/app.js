/*
1 : Dessiner sur la canvas un des héros dans le dossier image
2 : aténuer l'opacité de cette image
3 : Dessiner par dessus avec les formes
4 : Remplir les formes de couleur
5 : Ajouter un dégradé dans une partie du corp ou plus si vous avez le temps
*/
var Position = function(x, y) {
	var _self = this;
	_self.x = 0;
	_self.y = 0;
}

var updateRect = function(x,y) {
	context.clearRect(initPos.x,initPos.y, x-initPos.x, y-initPos.y);
	context.beginPath();
	context.rect(initPos.x, initPos.y,x-initPos.x, y-initPos.y);
	context.fillStyle = "rgb(190,190,190)";
	context.fill();
	context.strokeStyle = "black";
	context.stroke();
}

var initPos = new Position();
var finalPos = new Position();

var mouseClick = false;

var monCanvas = document.getElementById("monCanvas");
	monCanvas.width = 800;
	monCanvas.height = 400;
	monCanvas.addEventListener("click", function (event) {
		var posX = event.clientX - monCanvas.offsetLeft;
		var posY = event.clientY - monCanvas.offsetTop;
		console.log(posX + ", " + posY);
	})
	monCanvas.addEventListener("mousedown", function(event) {
		initPos.x = event.clientX - monCanvas.offsetLeft;
		initPos.y = event.clientY - monCanvas.offsetTop;
		mouseClick = true;
	})
	monCanvas.addEventListener("mousemove", function(event) {
		var posX = event.clientX - monCanvas.offsetLeft;
		var posY = event.clientY - monCanvas.offsetTop;
		if (mouseClick) {
			updateRect(posX,posY);
		}
	})
	monCanvas.addEventListener("mouseup", function(event) {
/*		var posX = event.clientX - monCanvas.offsetLeft;
		var posY = event.clientY - monCanvas.offsetTop;
		context.clearRect(0,0,800,400);
		context.beginPath();
		console.log(initPos);
		context.rect(0, initPos.y,posX-initPos.x, posY-initPos.y);
		context.fillStyle = "rgb(190,190,190)";
		context.fill();
		context.stroke();*/
		mouseClick = false;
	})
var context = monCanvas.getContext('2d');



var imageObj = new Image();
imageObj.onload = function() {
	context.scale(2, 2);
	context.globalAlpha = 0.1;
  	context.drawImage(imageObj, 50, 10);
  	context.globalAlpha = 1;
  	context.scale(.5,.5);
};
imageObj.src = 'images/heroes/scoobidoo.jpg';
	
	// head
  	context.beginPath();
	context.rect(145, 72, 204-145, 149-72);
	context.fillStyle = "rgb(176,133,82)";
	context.fill();


	// ear left
	context.beginPath();
	context.moveTo(145, 72);
	context.lineTo(155,48);
	context.lineTo(165,72);
	context.closePath();
	context.fillStyle = "rgb(238,192,176)";
	context.fill();
	context.strokeStyle = "rgb(176,133,82)";
	context.stroke();

	// ear right
	context.beginPath();
	context.moveTo(185, 72);
	context.lineTo(195,48);
	context.lineTo(205,72);
	context.closePath();
	context.fillStyle = "rgb(238,192,176)";
	context.fill();

	//corps
	context.beginPath();
	context.rect(138,154,211-138,280-154);
	context.fillStyle = "rgb(176,133,82)";
	context.fill();

	// collier
	context.beginPath();
	context.rect(145,149,205-145,157-149);
	context.fillStyle = 'rgb(15,149,176)';
	context.fill();

	// patte left  tache :#3E3E43
	context.beginPath();
	context.rect(129,274,40,15);
	context.fillStyle = "rgb(176,133,82)";
	context.fill();

	// patte right  
	context.beginPath();
	context.rect(182,274,40,15);
	context.fillStyle = "rgb(176,133,82)";
	context.fill();

	//jambe left
	context.beginPath();
	context.rect(150,160,20,145);
	context.fillStyle = "rgb(176,133,82)";
	context.fill();

	//jambe right
	context.beginPath();
	context.rect(180,160,20,145);
	context.fillStyle = "rgb(176,133,82)";
	context.fill();

