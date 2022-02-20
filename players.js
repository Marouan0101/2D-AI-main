//Sets all of the variables of the players.
var players = [];

players.player1 = {
	size: {
		width: 40,
		height: 48,
	},
};

players.player2 = {
	size: {
		width: 40,
		height: 48,
	},
};

players.player1.position = {
	x: objects.platform.position.x + players.player1.size.width,
	y: objects.platform.position.y - players.player1.size.height,
};

players.player2.position = {
	x: objects.platform.position.x + (objects.platform.size.width - players.player2.size.width * 2),
	y: objects.platform.position.y - players.player2.size.height,
};

var hit = false; //left over variable that i am too afraid to remove.
players.player1.velocity = {
	dy: 0,
	dx: 0,
};
players.player2.velocity = {
	dy: 0,
	dx: 0,
};

players.player1.collision = {
	ground: false,
	player: false,
};
players.player2.collision = {
	ground: false,
	player: false,
};

players.player1.data = {
	jumpcount: 2,
	attacking: false,
	health: 100,
	pvalue: 1, //player value, used in attack.js so that the player's value (1 or 2) can be found by looking inside of the object. Quite convinient.
	stamina: 100,
};
players.player2.data = {
	jumpcount: 2,
	attacking: false,
	health: 100,
	pvalue: 2,
	stamina: 100,
};

console.log(players); //Used for debug purposes.