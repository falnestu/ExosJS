/*1: charger le fichier data.json
   tip : xmlHttpRequest
   2 : ajouter un score aléatoire (0 -> 1000) à toutes ces personnes
   tip: arr.map()
   3 : classer l'odre du tableau selon les scores
   tip : arr.sort()
   4 :  mettre personnes dans 3 categories (a > 750, b > 500, c < 500 )
   tip : forEach()
   5 : compter combien de personne viennent du "Bahrain"
   tip : filter()
   6 : afficher le plus grand score
   tip : forEach()
   7 : afficher le plus petit score
   tip : forEach()*/

function ajaxGet(url, callback, onError){
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    // Success!
	    var data = JSON.parse(request.responseText);
	    callback(data);
	  } else {
	    // We reached our target server, but it returned an error
	    onError();
	  }
	};

	request.onerror = function() {
	  // There was a connection error of some sort
	  onError();
	};

	request.send();
}

function documentReady(e){
	/* NOTRE CODE */
	ajaxGet("data.json",
		function(arr) {
			//var newMap = arr.map((el,key) => el.score = Math.floor(Math.random() * 1000));
			var newMap = arr.map(function(el, key){
	            var newEl = Object.create(el);
	            newEl.score = Math.floor(Math.random() * 1000);
	            return newEl;
        	})

        	newMap.sort((objA,objB) => objA.score-objB.score);
        	/* 
        	newMap.sort(function(objA,objB) {
				return objA.score - objB.score;
        	})
        	*/

        	var catA = [], catB = [], catC = [];
        	newMap.forEach( function(element, index) {
        		switch (true) {
        			case (element.score > 750):
        				catA.push(element);
        				break;
        			case (element.score > 500):
        				catB.push(element);
        				break;
        			case (element.score < 500):
        				catC.push(element);
        				break;
        		}
        	});

        	var bahrainPersons =  newMap.filter(element => element.country == "Bahrain");
/*        	
        	console.log(catA)
        	console.log(catB)
        	console.log(catC)*/
        	console.log(bahrainPersons);
			var minScore = newMap[0];
			var maxScore = newMap[newMap.length-1];

			console.log(minScore);
			console.log(maxScore);


			//console.log(newMap);
	},
	function() {
		console.log("ERROR !");
	}
	);




}
window.addEventListener("DOMContentLoaded", documentReady);