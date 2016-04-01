/*
	# Exercice : Pair et impair

	* Ecrivez une boucle qui va itérer de 0 à 20.
	* Pour chaque itération , il va vérifier si le nombre actuel est pair ou impair

	- afficher dans la console par exemple : " 2 est pair "

*/
for (var i = 0; i < 20; i++) {
	if (i % 2) {
		console.log(i + " est impair");
	} else {
		console.log(i + " est pair");
	}
}



/*
	# Exercice : Multiplication Tables

	* Écrire une boucle qui va itéremlgfdkhr de 0 à 10
	* Pour chaque itération de la boucle, il va multiplier le nombre de 9

	- afficher dans la console le résultat par exemple : " 2 * 9 = 18".
*/
for (var i = 0; i < 10 ; i++) {
	console.log(i + " * 9 = " + (i*9));
}




/*
	# Exercice : assigner des grades

	* Écrire une boucle qui va itérer de 0 à 100
	* écrire une fonction qui va retourner des grades selon les scores reçu
		- si le score au dessus de 90 le grade est A
		- si le score au dessus de 80 le grade est B
		- si le score au dessus de 70 le grade est C
		- si le score au dessus de 65 le grade est D
		- si le score n'entre pas dans ces catégories le grade est F

	- afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".

 */
var j=100, grade;
while(j--){
	(function() {
		if (j > 90) { 
			grade = "A"; 
		} else if (j > 80) {
			grade = "B";
		} else if (j > 70) {
			grade = "C";
		} else if (j > 65) {
			grade = "D";
		} else {
			grade = "F";
		}
	})()
	console.log("Pour " + j + " points vous avez le grade " + grade);
}


/*
	# Exercice : pyramide

	- Écrire une boucle qui va dessiner dans la console (ligne par ligne) le résulat suivant
		*  
		* *  
		* * *  
		* * * *  
		* * * * *
 */
var rows, col;
for (var rows = 1; rows < 6; rows++) {
	var display = "";
	for (col = 0; col < rows; col++) {
		display += "*";
	}
	console.log(display);
}