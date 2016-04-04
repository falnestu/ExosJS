/*
	# Exercice : Calcules
	
	Déclarez les variables suivantes : 

	* Fonction qui fait des soustractions
	* Fonction qui fait des division
	* Fonction qui fait des multiplications
	* Fonction qui fait des calcule de pourcentages ( 2 arguments: valeur et pourcentage )
	par exemple : "50% de 10 = 5";
	* Faire un fonction qui fait des calcules de vitesse (2 arguments : distance, temps en heure)

	- Le résultat doit être par exemple : '50km/h'
*/

function subtraction(arg1, arg2) {
	return (arg1 - arg2);
}
console.log("Soustraction : " + subtraction(2,1));

function division(numerator, denominator) {
		return (numerator / denominator);
}
console.log("Division : " + division(10,2));

function multiplication(arg1, arg2) {
	 return (arg1 * arg2);
}
console.log("Multiplication : " + multiplication(2,3));

function pourcentage(value, percent) {
	console.log("Pourcentage :" + division(multiplication(value, percent),100));
}
pourcentage(10,50);

function speed(distance, time) {
	console.log("vitesse : " + division(distance,time) + " km/h" );
}
speed(12,2);





















