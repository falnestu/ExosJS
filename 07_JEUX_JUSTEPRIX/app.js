/*

# Exercice : Juste prix

Déclarez les variables suivantes : 

* variable qui sera utilisée pour afficher un message
* variable qui va compter le nombre d'essais
* variable de la valeur minimum qu'on peut entrer (ici 20)
* variable de la valeur maximale qu'on peut entrer (ici 80)

Déclarez les fonctions suivantes : 

* crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
* crée une fonction qui prends un argument pour tester si le numéro qu'on a entré est le bon dans cette fonction a le choix entre 3 messages
	- C'est plus
	- C'est moins
	- C'est juste tu as trouvé en X coups
*/

//Déclaration de variables
var message, justePrix, nbTrys = 0 , min = 20, max = 80, continu = true;

//Random avec min et max
var random = function (min, max) {
	return min + Math.round(Math.random() * (max - min));
}

function verifyNumber(number) {
	nbTrys++;
	if (number == justePrix) {
		message = "C'est juste tu as trouvé en " + nbTrys + " coups";
		continu = false;
	} else {
		if (number > justePrix) {
			message = "C'est moins";
		} else {
			message = "C'est plus";
		}
	}
	/*console.log(message);*/
	return message;
}

function verifyNumber2(number){
	if (number == justePrix) {
		message = "C'est juste tu as trouvé en " + nbTrys + " coups";
		continu = false;
	} else if (number > justePrix) {
		 message = "C'est moins";
	} else {
		message = "C'est plus";
	}
	
	return message;
}

justePrix = random(min,max);
while(continu){
	var enteredNumber = prompt("Entrez un nombre entre " + min + " et " + max );
	var t0 = window.performance.now();
	var msg = verifyNumber(enteredNumber);
	var t1 = window.performance.now();
	console.log("Essai " + nbTrys + " : " + (t1-t0) + " ms" );
	var t2 = window.performance.now();
	var msg = verifyNumber2(enteredNumber);
	var t3 = window.performance.now();
	console.log("Essai " + nbTrys + " : " + (t3-t2) + " ms" );
	alert(msg);
}



