//All the different controls of the players. Few comments because code is rather self-explanatory.
players.player1.controls = {
	left: false,
	right: false,
	up: false,
	uphold: false,
	attack1: false,
	attack2: false,
	attack3: false,
	attack4: false,
};

players.player2.controls = {
	left: false,
	right: false,
	up: false,
	uphold: false,
	attack1: false,
	attack2: false,
	attack3: false,
	attack4: false,
};

function keyPressed() {
	// Player 1 keybindings for movement
	if (key == "a") {
		players.player1.controls.left = true;
	}
	if (key == "d") {
		players.player1.controls.right = true;
	}
	if (key == "w") {
		players.player1.controls.up = true;
	}

	// Player 1 keybindings for attacking
	if (key == "r") {
		players.player1.controls.attack1 = true;
	}
	if (key == "t") {
		players.player1.controls.attack2 = true;
	}
	if (key == "y") {
		players.player1.controls.attack3 = true;
	}
	if (key == "c") {
		players.player1.controls.attack4 = true;
	}

	// Player 2 keybindings for movement
	if (keyCode === LEFT_ARROW) {
		players.player2.controls.left = true;
	}
	if (keyCode === RIGHT_ARROW) {
		players.player2.controls.right = true;
	}
	if (keyCode === UP_ARROW) {
		players.player2.controls.up = true;
	}

	// Player 2 keybindings for attacking
	if (key == ",") {
		players.player2.controls.attack1 = true;
	}
	if (key == ".") {
		players.player2.controls.attack2 = true;
	}
	if (key == "-") {
		players.player2.controls.attack3 = true;
	}
	if (keyCode === 16) {
		players.player2.controls.attack4 = true;
	}
}

function keyReleased() {
	if (key == "a") players.player1.controls.left = false;
	if (key == "d") players.player1.controls.right = false;
	if (key == "w") {
		players.player1.controls.up = false;
		players.player1.controls.uphold = false;
	}
	if (key == "r" || key == "t" || key == "y" || key == "c") {
		players.player1.data.attacking = false;
	}
	if (key == "r") {
		players.player1.controls.attack1 = false;
	}
	if (key == "t") {
		players.player1.controls.attack2 = false;
	}
	if (key == "y") {
		players.player1.controls.attack3 = false;
	}
	if (key == "c") {
		players.player1.controls.attack4 = false;
	}

	if (keyCode === LEFT_ARROW) players.player2.controls.left = false;
	if (keyCode === RIGHT_ARROW) players.player2.controls.right = false;
	if (keyCode === UP_ARROW) {
		players.player2.controls.up = false;
		players.player2.controls.uphold = false;
	}
	if (key == "," || key == "." || key == "-" || keyCode == 16) {
		players.player2.data.attacking = false;
	}
	if (key == ",") {
		players.player2.controls.attack1 = false;
	}
	if (key == ".") {
		players.player2.controls.attack2 = false;
	}
	if (key == "-") {
		players.player2.controls.attack3 = false;
	}
	if (keyCode == 16) {
		players.player2.controls.attack4 = false;
	}
}
