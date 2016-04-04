
/*
	# Exercice : Minimum et maximum
	
	Déclarez les variables suivantes : 

	* la valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
	* la valeur est égal au chiffre le plus grand dans l'enssemble suivant :-3, 9, 21, 36, 27, 54, 17, 35
	* la valeur est égal a l'addition des deux précédentes variables
	
*/
var minimum = Math.min( 7, 5, -12, 6, 32, 18, 14, -2);
var maximum = Math.max( -3, 9, 21, 36, 27, 54, 17, 35);
var add = minimum + maximum;
console.log(add);


/*
	# Exercice : Aléatoire 1
	
	Déclarez les variables suivantes : 

	* déclarer une variable dont la valeur entre 50 et 100
	
*/
var rand = function(min, max) {
	return min + Math.random() * (max - min);
}
console.log(rand(50,100));
console.log(rand(50,100));
console.log(rand(50,100));


/*
	# Exercice : Aléatoire 2
	
	Déclarez les variables suivantes : 

	* déclarer une variable dont la valeur aléatoire peut être seulement 0 ou 1 
	
*/
var rand0or1 = function() {
	return Math.round(Math.random());
}
console.log(rand0or1());
console.log(rand0or1());
console.log(rand0or1());


/*
	# Exercice : Aléatoire 3
	
	Déclarez les variables suivantes : 

	* déclarer une variable dont la valeur aléatoire peut aller de 0 à 10 inclu
	
*/
console.log("Au supérieur");





var random = function() {
	return Math.floor(Math.random() * 11);
}










var i = 0;
var count = 0;
while(i<1000){
	var result = random();
	if(result == 0) { count++; }
	i++;
}
console.log("10 : " + count);












