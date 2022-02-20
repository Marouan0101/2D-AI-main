var attackhit = false;
var direction = 0;
var angledhit = 0;

var attacktypes = {};

//Defines all the different types of attacks, along with their stats.
//This makes it significantly easier to edit as we please.
attacktypes = {
	basic: {
		damage: 2,
		stamina: 20,
		knockback: 10,
	},
	primary: {
		damage: 5,
		stamina: 35,
		knockback: 20,
	},
	secondary: {
		damage: 10,
		stamina: 60,
		knockback: 25,
	},
	special: {
		damage: 20,
		stamina: 100,
		knockback: 40,
	},
};

function attack(attacker, victim, type) { //Attack function that is executed once a player attacks.
	//The arguments put in are the attacker (player object), the victim (which is the target player), and type (which is the type of attack)
	if (attacker.data.attacking == false) { //Checks if  player is already attacking
		if (attacker.data.stamina >= type.stamina) { //Checks if player has enough stamina
			attacker.data.stamina -= type.stamina; //Removes the attack's stamina requirement from the attacker's stamina. Even if the player misses.
			attackhit = returnCollisionCheck(attacker, victim); //Checks if the two players are indeed colliding. If it is then the attack starts.
			if (attackhit == true) {
				//If all conditions are met, the attack starts and does the following:
				shake(type.knockback); //Adds shake to every object. Function defined in effects.js
				direction = attacker.position.x - victim.position.x; //Checks which direction the attack is in (to figure out direction of knockback)
				angledhit = attacker.position.y - victim.position.y; //Checks for difference in y value between players to see if the knockback should be angled

				//Knockback depending on direction.
				if (direction >= 0) {
					attacker.velocity.dx += 5;
					victim.velocity.dx -= type.knockback; //Knockback amount depending on attack type.
				} else {
					attacker.velocity.dx -= 5;
					victim.velocity.dx += type.knockback; //Knockback amount depending on attack type.
				}
				
				victim.data.health -= type.damage; //Victim loses health depending on attack type
				if (victim.data.health <= 0) {
					endGame(attacker.data.pvalue, false); //If health drops to 0, end game. Attacker wins.
				}
				victim.velocity.dy -= angledhit * 0.05; //Changes the y velocity slightly, depending on the difference in y-value between players.

				if (victim.data.pvalue == 1) {
					bikerObj.changeAnimation("hurt"); //Changes animation
					bikerObj.animation.frameDelay = 8;
				}

				if (victim.data.pvalue == 2) {
					cyborgObj.changeAnimation("hurt"); //Changes animation
					cyborgObj.animation.frameDelay = 8;
				}
			}
			attackhit = true;
		}
	}
}

function calcStamina() { //Gives both players 0.5 (0.5%) extra stamina every frame.
	if (players.player1.data.stamina < 100) {
		players.player1.data.stamina += 0.5;
	}
	if (players.player2.data.stamina < 100) {
		players.player2.data.stamina += 0.5;
	}
}
