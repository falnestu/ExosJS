var game = function() {

	/***********************************************
		DECLARATION DE VARIABLES
	************************************************/
	var failedTrys = 0,
		trys = 0,
		letters = [[],[]],
		INDEX_WRONG = 0,
		INDEX_GOOD = 1,
		message = "",
		wordToGuess = "bonjour".split(''),
		DEFAULT_CHAR = "_",
		displayWord = new Array(wordToGuess.length).fill(DEFAULT_CHAR);

	/***********************************************
		DECLARATION DE FONCTIONS
	************************************************/

	/* fonction pour terminer le jeu*/
	var endGame = function(){
		return displayWord.indexOf(DEFAULT_CHAR) != -1;
	}

	/* fonction pour afficher un tableau avec un séparateur par défaut un espace*/
	var displayTab = function(array, separator){
		var show = "", separator = separator || ' ';
		for(var index = 0; index < array.length; index++){
			show += array[index] + separator;
		}
		return show;
	}

	/* fonction quand la lettre n'est pas présente */
	var failed = function(letter) {
		failedTrys++;
		letters[INDEX_WRONG].push(letter);
		return "Désolé, cette lettre n'est pas présente\n";
	}

	/* fonction quand la lettre est présente */
	var success = function(letter) {
		for(var index = 0; index < wordToGuess.length; index++){
			if ( wordToGuess[index] === letter.toLowerCase()) {
				displayWord[index] = letter;
			}
		}
		letters[INDEX_GOOD].push(letter);
		return "Bravo ! Tu as trouvé la lettre " + letter + "\n";
	}

	/* fonction pour vérifier l'entrée du joueur */
	var guessLetter= function(letter) {
		if (letters[INDEX_GOOD].indexOf(letter) == -1 && letters[INDEX_WRONG].indexOf(letter) == -1) {
			trys++;
			if (wordToGuess.indexOf(letter) == - 1) {
				return failed(letter);
			}
			return success(letter);
		}
		return "Vous avez déjà essayé cette lettre (" + letter +")\n";
	}

	/* fonction pour avoir une lettre OBLIGATOIREMENT */
	var checkEntry = function(displayText) {
		var letters = "abcdefghijklmnopqrstuvwxyz".split('');
		do{
			var notValid = true;
			var entry = prompt(displayText);
			if (letters.indexOf(entry) != -1) {
				notValid = false;
			} else {
				alert("Rentre une LETTRE");
			}
		}while(notValid);
		return entry;
	}

	/***********************************************
		EXECUTION
	************************************************/	
	while(endGame()){
		/* On definit le texte à afficher:
			message

			Quelle lettre?
			_ _ _ _ _ _ _

			Echecs : X ( a, b, c, d, )
		*/
		var displayText = message 
			+ "\nQuelle lettre?\n" 
			+ displayTab(displayWord) 
			+ "\n\nEchecs : " + failedTrys 
			+ " ( " + displayTab(letters[INDEX_WRONG].sort(),', ') + ")";

		var entry = checkEntry(displayText);
		message = guessLetter(entry);
	}

	alert("Vous avez gagné en " + trys + " tentatives!");
}

