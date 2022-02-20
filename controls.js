function controls(playerObj, spriteObj) {
	if (!endgame) {
		// bug fix for position when image is mirrored
		if (bikerObj.mirrorX() == -1) {
			bikerObj.position.x -= 15;
		}
		if (cyborgObj.mirrorX() == 1) {
			cyborgObj.position.x += 15;
		}

		// Decide who is victim
		if (playerObj.data.pvalue == 1) {
			var victim = players.player2;
		} else if (playerObj.data.pvalue == 2) {
			var victim = players.player1;
		}
		// Movement
		if (playerObj.controls.left || playerObj.controls.right) {
			spriteObj.changeAnimation("run");

			// Attacking while running
			if (playerObj.controls.attack1) {
				attack(playerObj, victim, attacktypes.basic);
				spriteObj.changeAnimation("runAttack");
			}

			if (playerObj.controls.left) {
				playerObj.velocity.dx -= 0.8;
				spriteObj.mirrorX(-1); // Face left
			} else if (playerObj.controls.right) {
				playerObj.velocity.dx += 0.8;
				spriteObj.mirrorX(1); // Face right
			}
		} else {
			playerObj.velocity.dx = 0.82 * playerObj.velocity.dx;
		}

		if (!playerObj.collision.ground) {
			spriteObj.changeAnimation("jump"); // If in the air: change animation to jump
			spriteObj.animation.frameDelay = 10; // Slow down animation

			// checking for double jump
			if (playerObj.data.jumpcount == 0 && playerObj.controls.up) {
				spriteObj.changeAnimation("doubleJump");
				spriteObj.animation.frameDelay = 6;
			}
		}

		//
		// ATTACKS
		//

		if ((playerObj.controls.left || playerObj.controls.right) && playerObj.controls.attack1) {
			// Attacking while running
			spriteObj.changeAnimation("runAttack");
			attack(playerObj, victim, attacktypes.basic);
		} else if (playerObj.controls.attack1) {
			// Normal attacking
			spriteObj.changeAnimation("basicAttack");
			spriteObj.animation.frameDelay = 5;
			attack(playerObj, victim, attacktypes.basic);
		}

		if (playerObj.controls.attack2) {
			// second attack
			attack(playerObj, victim, attacktypes.primary);
			spriteObj.changeAnimation("primaryAttack");
			spriteObj.animation.frameDelay = 5;
		}

		if (playerObj.controls.attack3) {
			// third attack
			attack(playerObj, victim, attacktypes.secondary);
			spriteObj.changeAnimation("secondaryAttack");
		}

		if (playerObj.controls.attack4) {
			// fourth attack
			attack(playerObj, victim, attacktypes.special);
			spriteObj.changeAnimation("specialAttack");
			spriteObj.animation.frameDelay = 8;
		}
	}

	collisionCheck(playerObj, objects.platform); //Checks if there is collision. Function collisionCheck() is found in collision.js

	if (playerObj.collision.ground) {
		playerObj.velocity.dy = 0; //Y-velocity set to 0 if there is collision with platform.
	} else {
		playerObj.velocity.dy += 0.2; //Gravity changing player's velocity if they are in the air.
	}

	if (playerObj.controls.up) { //If player jumps.
		if (!playerObj.controls.uphold) { //Ensures that player isn't holding down jump button.
			if (playerObj.data.jumpcount > 0) { //Checks if player has jumped twice already. (Max jump amount is 2 in a row. Aka, Double jumping)
				playerObj.velocity.dy -= 5; //Removes 5 from the player's y velocity
				playerObj.controls.uphold = true; //Ensures that player isn't holding down jump button.
				playerObj.data.jumpcount -= 1; //Removes 1 from the jump counter.
			}
		}
	}

	if (playerObj.velocity.dx != 0) {
		playerObj.velocity.dx = 0.92 * playerObj.velocity.dx;
		//Friction. This makes it so that when the player no longer moves to the left or to the right,
		//They still move a little bit longer. But only a little bit. This makes them glide a little.
	}

	 //The velocity is added to the players' x and y values.
	playerObj.position.y += playerObj.velocity.dy;
	playerObj.position.x += playerObj.velocity.dx;
}
