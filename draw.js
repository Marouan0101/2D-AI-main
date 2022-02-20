function draw() {
	let shakeX = 0;
	let shakeY = 0;
	if(gamestarted == true){
		background(100);
		image(blurBackgroundImage,-200 + effects.shake.x * 2,-200 + effects.shake.x * 2, 1920+200,1080+200); //Adding 200 to the borders allows for the image to move in accordance to the mouse.



		//These are all the functions that are supposed to run once per frame:
		definePolygons(); //Defines all polygons (player hitboxes, healthbars, platform and so on)
		collideDebug(); //Collision check debugging
		calcStamina(); //Calculates player stamina
		cooldownBar(); //Makes the stamina cooldown bar go down.

		// Placing hitbox on the Biker
		bikerObj.position.x = players.player1.position.x + players.player1.size.width / 2 + 15;
		bikerObj.position.y = players.player1.position.y + players.player1.size.height / 2 - 12;
		bikerObj.scale = 1.5;
		bikerObj.changeAnimation("idle");

		// Placing hitbox on the Cyborg
		cyborgObj.position.x = players.player2.position.x + players.player2.size.width / 2 - 15;
		cyborgObj.position.y = players.player2.position.y + players.player2.size.height / 2 - 12;
		cyborgObj.scale = 1.5;
		cyborgObj.changeAnimation("idle");

		//Checks for input
		controls(players.player1, bikerObj); // Sets Player 1 as "Biker" 
		controls(players.player2, cyborgObj); // Sets Player 2 as "Cyborg"

		drawSprites(); //Draws sprites onto hitboxes
		drawUI(); //Draws all UI elements.
		checkFalldown(); //Checks if player fell out of the map. If they did, the other player wins.
	}else{
		showMainMenu(); //Shows main menu when game hasnt started yet

	}
}
