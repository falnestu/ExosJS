/*
	# Exercice : clone

	* crée un tableau qui contetient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9 
	* faire une boucle qui permet d'additioner toutes ces valeurs

*/
var sum = 0, tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sumArray = function(array){
	for (var i = 0; i < tab1.length; i++) {
		sum += tab1[i];
	}
	return sum;	
}
console.log(sumArray(tab1));

/*
# Exercice : Vos meilleurs choix

	* crée un tableau qui contetient 3 nom d'acteurs
	-Pour chaque acteur, afficher dans la console par exemple : "Le numero 1 est Stalone"
	
	Bonus:transformer en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/

var actors = ["Stalone", "Cruise", "Willis"];
var order = ["premier", "deuxième","troisième"];
for (var i = 0; i < actors.length; i++) {
	console.log("Le numero " + (i+1) + " est " + actors[i]);
	console.log("Le " + order[i] + " est " + actors[i]);
}

/*
	# Exercice : Duplications

	* crée un tableau qui contetient les valeurs suivantes : ruby, marteau, piece, dague, piece, tenue, piece, ruby, vie, dague, piece  
	* faire une fonction qui permet de trouver des valeurs en double

*/
/*var inventaire = ["ruby", "marteau", "piece", "dague", "piece", "tenue", "piece", "ruby", "vie", "dague", "piece"];
var doublon = [];
var findDoublons = function(array) {
	
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		for (var j = i + 1; j < array.length; j++) {
			if (doublon.indexOf(element) == -1 && element == array[j]) {
				doublon.push(element);
			}
		}
		
	}
}
findDoublons(inventaire);
console.dir(doublon);*/
var inventaire = ["ruby", "marteau", "piece", "dague", "piece", "tenue", "piece", "ruby", "vie", "dague", "piece"];
/*	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if (element == array[i]) {
			count++;
		}
	}
	return count;*/

	/*	var sortArray = array.slice(0).sort();
	var startIndex = sortArray.indexOf(element);
	if (startIndex != -1) {
		for (var i = startIndex + 1; sortArray[i] == element ; i++) {}
		return i - startIndex;
	}
	return 0;*/
	/*console.log(containsX(inventaire, "marteau"));*/
var containsX = function(array, element) {
	var sortArray = array.slice(0).sort();
	var minIndex = sortArray.indexOf(element)
	if ( minIndex!= -1) {
		return (sortArray.lastIndexOf(element) - minIndex) + 1;
	}
	return -1;
}
var findDoublons = function(array) {
	var doublons = [];
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		if(doublons.indexOf(element) == -1 && containsX(array,element) > 1){
			doublons.push(element);
		}
	}
	return doublons;
}
console.dir(findDoublons(inventaire));


/*
	# Exercice : clone

	* crée un tableau qui contetient les valeurs suivantes : "Mario", "Luigi", "Peach"
	* dupliquer le tableau et y ajouter "Bowser"

*/
var clone = function(array){
	return array.slice(0);
}
var duplicate, players = ["Mario", "Luigi", "Peach"];
duplicate = clone(players);
duplicate.push("Bowser");
console.dir(duplicate);

/*
	# Exercice : occurence

	* crée un tableau qui contetient les valeurs suivantes : 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3
	* Trouver l'élément le plus fréquent du tableau

*/
/*var tab_element, tab = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var maxOccurences = function(array){
	console.log("prout");
	var maxElement = array[0], maxOcc = 1;
	var sortArray = clone(array).sort();
	for (var i = 1; i < sortArray.length; i++) {
		var element = sortArray[i];
		for (var j = i++; sortArray[j] == element; j++) {}
		if (j-i > maxOcc) {
			maxOcc = j-i;
			ElementMaxOcc = maxElement;
		}
	}
	console.log("Element : " + ElementMaxOcc + " apparait " + maxOcc + " occurences");
}
console.log("test");
maxOccurences(tab);*/

var tab = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var findMaxElement = function(array) {
	var sortArray = clone(array).sort();
	var maxElement = sortArray[0],
	 	countElement = containsX(sortArray, maxElement);
	for (var i = countElement; i < sortArray.length; i+=count) {
		var element = sortArray[i];
		var count = containsX(sortArray, element);
		if (count > countElement) {
			maxElement = element;
			countElement = count;
		}
	}
	return maxElement;
}
console.log(findMaxElement(tab));
/*
	# Exercice : aléatoire

	* crée un tableau qui contetient les valeurs suivantes :Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
	* choisir un personnage aléatoirement dans le tableau

*/
var mortal = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var random = function(min,max){
	return min + Math.floor(Math.random() * (max - min));
}
console.log(mortal[random(0, mortal.length)]);

console.log(containsX(mortal,"toto"));