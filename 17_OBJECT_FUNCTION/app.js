/*
 # Exercice : Adversaire  * crée un objet "character" qui possèe le propriétés suivantes :
 
 - name (string)
 - level (int)
 - life (int)
 - weapon (object)
 - attack (function)
 - receiveDamage (function)  * l'objet "weapon" possèe les propriétés suivantes :
 - name (string)
 - damage (int)  * crée un objet "opponentCharacter" a partir de character
 * crée un objet "mainCharacter" a partir de character  * Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"
   - la fonction doit afficher dans la console (ligne par lige)
     + (le nom du personnage) attaque (nom de l'adversaire)
     + avec l'arme (nom de l'arme)
     + et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
     + (nom de l'adversaire) a maintenant (life de l'adversaire) de vie
*/

var Weapon = function(config){
	var _self = this;
	_self.name = config.name || "";
	_self.damage = config.damage || 0;
};

var bow = new Weapon({
	name : "bow",
	damage : 10
});

var Character = function(config){
	var _self = this;
	_self.name = config.name || "";
	_self.level = 1;
	_self.life = 100;
	_self.weapon = config.weapon || null;
};

Character.prototype.attack = function(opponent){
	var damages = this.level*this.weapon.damage;
		opponent.receiveDamage(damages);
		console.log(this.name + " attaque " + opponent.name +
						"\navec l'arme " + this.weapon.name +
						"\net lui inflige " + damages + " de dégats\n" +
						opponent.name + " a maintenant " + opponent.life + " de vie"
		);
};
Character.prototype.receiveDamage = function(damage){
	this.life -= damage;  
};

var mainCharacter = new Character({ name : "mainCharacter", weapon : bow });

var opponentCharacter = new Character({ name : "opponentCharacter" });

mainCharacter.attack(opponentCharacter);