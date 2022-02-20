//For all UI elements.

function drawUI() {
	//For the countdown timer and for the end game text.
	if (endgame == true) {
		textSize(100);
		textAlign(CENTER);
		text(endtext, window.innerWidth / 2 + effects.shake.x, window.innerHeight * 0.2 + effects.shake.y);
	} else {
		textSize(100);
		textAlign(CENTER);

		text(countdown, window.innerWidth / 2 + effects.shake.y, window.innerHeight * 0.2 + effects.shake.y);
	}

	//"Player 1" under healthbar
	textSize(30);
	textAlign(LEFT);
	text("Player 1", 20 + effects.shake.x, window.innerHeight * 0.11 + effects.shake.y);

	//Draws healthbar1 red (background)
	fill(255, 0, 0);
	beginShape();
	for (const { x, y } of objects.healthbar1red.polygon) vertex(x + effects.shake.x, y + effects.shake.y);
	endShape(CLOSE);

	//Draws healthbar1 green (foreground)
	fill(0, 255, 0);
	bar1percent = players.player1.data.health / 100;
	beginShape();
	for (const { x, y } of objects.healthbar1green.polygon) vertex(x + effects.shake.x, y + effects.shake.y);
	endShape(CLOSE);
	fill(0, 0, 0);

	//"Player 2" under healtbar
	textSize(30);
	textAlign(LEFT);
	text("Player 2", window.outerWidth - 140 + effects.shake.x, window.innerHeight * 0.11 + effects.shake.y);

	//Draws healthbar2 red (background)
	fill(255, 0, 0);
	beginShape();
	for (const { x, y } of objects.healthbar2red.polygon) vertex(x + effects.shake.x, y + effects.shake.y);
	endShape(CLOSE);

	//Draws healthbar2 green (foreground)
	fill(0, 255, 0);
	bar2percent = players.player2.data.health / 100;
	beginShape();
	for (const { x, y } of objects.healthbar2green.polygon) vertex(x + effects.shake.x, y + effects.shake.y);
	endShape(CLOSE);
	
	//Draws platform
	fill(0, 0, 0);
	noStroke();
	beginShape();
	for (const { x, y } of objects.platform.polygon) vertex(x + effects.shake.x, y + effects.shake.y);
	endShape(CLOSE);
	image(platformTexture, objects.platform.position.x+effects.shake.x, objects.platform.position.y + effects.shake.y, objects.platform.size.width, objects.platform.size.height)


	fill(0, 0, 0, 0);
	if (stopdraw != 1) {
		beginShape();
		for (const { x, y } of players.player1.polygon) vertex(x + effects.shake.x, y + effects.shake.y);
		endShape(CLOSE);
	}

	if (stopdraw != 2) {
		beginShape();
		for (const { x, y } of players.player2.polygon) vertex(x + effects.shake.x, y + effects.shake.y);
		endShape(CLOSE);
	}
	scale(1);
}

function cooldownBar() {
	//Draws stamina bars.
	strokeWeight(5);
	if (endgame == false) {
		var c1 = color(255, 255, 0); //Color when stamina is full
		var c2 = color(255, 0, 0); //Color when stamina is empty
		var sc = lerpColor(c2, c1, players.player1.data.stamina / 100); //LERPing to find color depending on stamina. Red when no stamina. Yellow when full stamina.
		stroke(sc); //sets stroke color
		line(players.player1.position.x + effects.shake.x - 5, players.player1.position.y - 10 + effects.shake.y, players.player1.position.x + players.player1.data.stamina / 2 + effects.shake.x - 5, players.player1.position.y - 10); //effects.shake.x not included cause its cooler that way

		//Same as above but for player 2
		var c1 = color(255, 255, 0);
		var c2 = color(255, 0, 0);
		var sc = lerpColor(c2, c1, players.player2.data.stamina / 100);
		stroke(sc);
		line(players.player2.position.x + effects.shake.x - 5, players.player2.position.y - 10, players.player2.position.x + players.player2.data.stamina / 2 + effects.shake.x - 5, players.player2.position.y - 10 + effects.shake.y);
	}
	//Reverting to original stroke weight and stroke color
	stroke(0, 0, 0);
	strokeWeight(1);
}
