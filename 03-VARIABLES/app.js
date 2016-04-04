/*
	# Exercise : Diseur de bonne aventure

	Déclarez les variables suivantes: nombre d'enfants, nom d'une femme, un pays, métier.
	afficher dans la console : "Vous serez X et habiterez à Y, et marié a Z avec N enfants."
*/
var nbChilds = 1;
var womamName = "Scarlett Johansson";
var country = "Etats-Unis";
var job = "développeur";
console.log("Vous serez " + job + " et habiterez à " + country + ", et marié à ", womamName + " avec " + nbChilds + " enfants.");

/*
	# Exercise : Calculer l'age

	Déclarez les variables suivantes : 
		- l'année courante
		- l'année de naissance d'une personne

	Calculer l'age de cette personne
*/
var currentYear = 2016;
var birthYear = 1985;

console.log ("Age = " + (currentYear - birthYear) );


/*

	# Exercise : bientôt vieux

	- Déclarez une variable avec votre age
	- Déclarez une variable avec un a age maximum ( esperons tous vivre 100ans )
	- Déclarez une variable avec une denrée alimentaire
	- Déclarez une variable avec votre consomation de cette denrée par jour ( int )

	Calculer le nombre de fois que vous en mangerez pour le restant de votre vie
	Mettez le resultat dans la console comme ceci : Il vous reste N de X avant d'ateindre l'age de Y ans";
*/

var age = 30;
var maxAge = 100;
var food = "burger";
var foodByDay = 5;
var foodsBeforeEndOfMyLife = (foodByDay*365)*(maxAge-age);

console.log("Il vous reste " +  foodsBeforeEndOfMyLife + " de " + food + "s avant d'atteindre l'age de " + maxAge + " ans");


/*
	# Exercise : 

	- Décomposer la résolution du calcul suivant : 

	var result = (1 + 2) * 3 + 4 / 2;
*/



//-> etape 1 : 3 * 3 + 4 / 2
//-> etape 2 :  9 + 4 / 2
//-> etape 3 : 9 + 2
//-> etape 4 : 11


var result = (1 + 2) * 3 + 4 / 2;
console.log(result);




