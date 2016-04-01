/*
# Exercice : PNJ    * Crée un objet "Character" qui contient les informations suivantes :     - name (string),
    - age (numero),
    - items to give (tableau).
    
    - afficher chaque information sur une ligne séparés dans la console
    - faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement
*/

var character = {
	name : "Toto",
	age : 12,
	itemsToGive : ["Push-Pop","Casquette","Culotte"]
}
/*console.log(character.name);
console.log(character.age);
console.log(character.itemsToGive);
character.giveItem = function() {
	var index = Math.floor(Math.random() * this.itemsToGive.length);
	return this.itemsToGive[index];
}
console.log(character.giveItem());*/


/*
# Exercice : Shop    Crée un tableau avec des objets à vendre (épée, hache, septre, etc.)
        - title (string)
        - physic (int)
        - magic (int)
        - minLevel (int)
        - available (boolean)        
        - faire une fonction pour afficher tout les objets
        - faire une fonction pour afficher les objets disponibles
        - faire une fonction pour afficher les objets dont le niveau minimum est de 10
*/
var Item = {}
	Item.title = "";
	Item.physic = 0;
	Item.magic = 0;
	Item.minLevel = 1;
	Item.available = true;
	Item.display = function() {
		var text = this.title 
				+ "\nLevel required : " + this.minLevel;
		if(this.physic) {
			text += "\nPhysic : " + this.physic;
		}
		if(this.magic) {
			text += "\nMagic : " + this.magic;
		}
		return  text;
	}

var sword = Object.create(Item);
	sword.title = "Sword";
	sword.physic = 5;	

var wand = Object.create(Item);
	wand.title = "Wand";
	wand.magic = 5;
	wand.available = false;	

var bigSword = Object.create(Item);
	bigSword.title = "BigSword";
	bigSword.physic = 10;	
	bigSword.minLevel = 10;	

var bigWand = Object.create(Item);
	bigWand.title = "BigWand";
	bigWand.magic = 10;
	bigWand.minLevel = 10;	

/*var Shop = {
	content : [sword, wand, bigSword, bigWand],
	displayAll : function() {
		for(var key in this.content) {
			console.log(this.content[key].display());
		}
	},
	displayAvailableItems : function() {
		for(var key in this.content) {
			if (this.content[key].available) {
				console.log(this.content[key].display());
			}
		}	
	},
	displayLevelItems : function(minLevel) {
		for(var key in this.content) {
			if (this.content[key].minLevel == minLevel) {
				console.log(this.content[key].display());
			}
		}
	}
}*/

var Shop1 = {
	content : [sword, wand, bigSword, bigWand],
	display : function(fn) {
		var fn = fn || (x => true);
		for(var key in this.content.filter(fn)) {
			console.log(this.content[key].display());
		}
		/*if (f != null) {
			for(var key in this.content) {
				if (f(this.content[key])) {
					console.log(this.content[key].display());
				}
			}
		} else {
			for(var key in this.content) {
				console.log(this.content[key].display());
			}
		}*/
	}
}

/*console.log("Tous:");
Shop1.display();
console.log("Disponibles:");
Shop1.display(x => x.available);
console.log("minLevel = 10:");
Shop1.display(x => x.minLevel == 10);*/

/*console.log("Tous:");
Shop.displayAll();
console.log("Disponibles:");
Shop.displayAvailableItems();
console.log("minLevel = 10:")
Shop.displayLevelItems(10);*/

/*
# Exercice : Personnage
    * crée un objet "mainCharacter" qui possède le propriétés suivantes :
    - name (string)
    - level (int)
    - life (int)
    - weapon (object)
    - attack (function)     *

     l'objet "weapon" possède les propriétés suivantes :
    - name (string)
    - damage (int)     *

     Appeler la fonction "attack" du personnage
        - la fonction doit retourner :
            (le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)
*/
var Weapon = {};
	Weapon.name = "";
	Weapon.damage = 0;

var bow = Object.create(Weapon);
	bow.name = "bow";
	bow.damage = 15;

var mainCharacter = {
	name : "Zelda",
	level : 3,
	life : 100,
	weapon : bow,
	attack : function() {
		var damages = this.level*this.weapon.damage;
		console.log(this.name + " attaque avec l'arme " + this.weapon.name + ". Les dégâts sont " + damages + " !");
	}
}

/*mainCharacter.attack();*/

/*
# Exercice : Adversaire    * crée un objet "character" qui possèe le propriétés suivantes :
    
    - name (string)
    - level (int)
    - life (int)
    - weapon (object)
    - attack (function)
    - receiveDamage (function)    

    * l'objet "weapon" possèe les propriétés suivantes :
    - name (string)
    - damage (int)     

    * crée un objet "opponentCharacter" a partir de character
    * crée un objet "mainCharacter" a partir de character    
    * Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"
        - la fonction doit afficher dans la console (ligne par lige)
            + (le nom du personnage) attaque (nom de l'adversaire)
            + avec l'arme (nom de l'arme)
            + et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
            + (nom de l'adversaire) a maintenant (life de l'adversaire) de vie
*/

var Weapon = {};
	Weapon.name = "";
	Weapon.damage = 0;

var bow = Object.create(Weapon);
	bow.name = "bow";
	bow.damage = 15;

var Character = {};
	Character.name = "";
	Character.level = 1;
	Character.life = 100;
	Character.weapon = bow;
	Character.attack = function(opponent) {
		var damages = this.level*this.weapon.damage;
		opponent.receiveDamage(damages);
		console.log(this.name + " attaque " + opponent.name +
						"\navec l'arme " + this.weapon.name +
						"\net lui inflige " + damages + " de dégats\n" +
						opponent.name + " a maintenant " + opponent.life + " de vie"
		);
	},
	Character.receiveDamage = function(damage) {
		this.life -= damage;
	}

var mainCharacter = Object.create(Character);
	mainCharacter.name = "mainCharacter";

var opponentCharacter = Object.create(Character);
	opponentCharacter.name = "opponentCharacter";

mainCharacter.attack(opponentCharacter);


