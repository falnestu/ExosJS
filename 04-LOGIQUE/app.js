/*
	# Exercise : langues

	- crée une variable pour specifier une langue ex ("fr","es","en")
	- crée une autre variable qui servira a stoquer un message
	- crée une condition pour savoir quelle sera la valeur du message si elle est "fr","es","en".
	afficher "Bonjour tout le monde","Hello world" et "Hola, Mundo" selon la bonne langue
*/

//windows.navigator.language
var language = "es";
var msg = "";
if (language === "fr") {
	msg = "Bonjour tout le monde";
} else if (language === "es") {
	msg = "Hola, Mundo";
} else if (language == "en") {
	msg = "Hello world";
}
console.log(msg);

/*
	# Exercise : Affichage des scores

	- crée une variable qui contient un score 
	- crée une variable qui contiendra le resultat
	- Faire des conditions pour pour etablir les rang selon le score

	Vous avez le rang "A" si vous avez un score supérieur a 90
	Vous avez le rang "C" si vous avez un score inférieur a 50

	 >90  >80  <50
	   A   B    C
*/

var score = 55;
var result;

if (score >= 90) {
	result = "A";
} else if (score >= 80) {
	result = "B";
} else if (score < 50) {
	result = "C";
} else {
	result = "K";
}
console.log(result);


/*
	# Exercise : Mettre au pluriel

	- Crée une variable contenant un mot au singulier
	- crée une variable qui contient le nombre dont tu en dispose
	- crée une variable qui contiendra le résultat

	- Faire une condition pour savoir si il faut rajouter un "s" ou pas
	Afficher la phrase "Je possède 4 cookie(s)"
*/
var singularWord = "cookie";
var number = 3;
var resultat = singularWord;
if (number > 1) {
	resultat +=  "s";
}
console.log("Je possède " + number + " " + resultat);







