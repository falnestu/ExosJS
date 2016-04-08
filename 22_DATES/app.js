/* 
   * Calcule le nombre d'années depuis que tu es né
   * Calcule le nombre de jours depuis que tu es né
   * Calcule le nombre d'heures depuis que tu es né
   * Calcule le nombre de minutes depuis que tu es né
   * Calcule dans combien de jours sera ton anniversaire    

   Bonus
   - Afficher le résultat dans le DOM en créant des éléments
   - Mettre à jour le DOM grâce à setInterval
*/

var diffMinutes = function(date) {
	var now = new Date();
	if (date < now) {
		return (now - date) / (1000 * 60);
	} else {
		return (date - now) / (1000 * 60);
	}
}

var diffHeures = function(date) {
	return diffMinutes(date) / 60;
}

var diffJours = function(date) {
	return diffHeures(date) / 24;
}

var diffAnnees = function(date) {
	return diffJours(date) / 365;
}

var daysBeforeNextDate = function(date) {
	return diffJours(date);
}

var birthDate = new Date("05-13-85");

console.log("annees : ", diffAnnees(birthDate));
console.log("jours : ", diffJours(birthDate));
console.log("heures : ", diffHeures(birthDate));
console.log("minutes : ", diffMinutes(birthDate));

console.log("Jours before : ", diffJours(new Date("05-13-16")));
