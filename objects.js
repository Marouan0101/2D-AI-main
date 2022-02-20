var objects = [];

// Platform
objects.platform = {
	size: {
		width: window.outerWidth / 1.5,
		height: window.outerHeight / 6,
	},
	position: {
		x: window.innerWidth - (window.innerWidth / 1.5) * 1.25,
		y: window.outerHeight - window.outerHeight / 6,
	},
};

objects.healthbar1red = {};
objects.healthbar1green = {};

objects.healthbar2red = {};
objects.healthbar2green = {};

var barwedge = 20;
var bar1percent = 1;
var bar2percent = 1;

function definePolygons() {
	//Used to create all objects
	objects.platform.polygon = [createVector(objects.platform.position.x, objects.platform.position.y), createVector(objects.platform.size.width + objects.platform.position.x, objects.platform.position.y), createVector(objects.platform.size.width + objects.platform.position.x, objects.platform.size.height + objects.platform.position.y), createVector(objects.platform.position.x, objects.platform.size.height + objects.platform.position.y)];
	players.player1.polygon = [createVector(players.player1.position.x, players.player1.position.y), createVector(players.player1.size.width + players.player1.position.x, players.player1.position.y), createVector(players.player1.size.width + players.player1.position.x, players.player1.size.height + players.player1.position.y), createVector(players.player1.position.x, players.player1.size.height + players.player1.position.y)];
	players.player2.polygon = [createVector(players.player2.position.x, players.player2.position.y), createVector(players.player2.size.width + players.player2.position.x, players.player2.position.y), createVector(players.player2.size.width + players.player2.position.x, players.player2.size.height + players.player2.position.y), createVector(players.player2.position.x, players.player2.size.height + players.player2.position.y)];

	//Makes the health bars. 2 Variables are also added, the constant barwedge and the variable barxpercent, which refers to the players health represented from 0 to 1.
	//The trick here is that there are 2 healthbars. A green that becomes smaller when player takes damage, and a red one in the background.
	objects.healthbar1red.polygon = [createVector(20 + barwedge, 20), createVector(window.outerWidth / 2 - 80, 20), createVector(window.outerWidth / 2 - 80 - barwedge, 55), createVector(20, 55)];
	objects.healthbar1green.polygon = [createVector(20 + barwedge, 20), createVector((window.outerWidth / 2 - 80) * bar1percent, 20), createVector((window.outerWidth / 2 - 80) * bar1percent - barwedge, 55), createVector(20, 55)];

	objects.healthbar2green.polygon = [createVector(window.outerWidth - 20, 20), createVector((window.outerWidth / 2 + 80) * (2 - bar2percent) - barwedge, 20), createVector((window.outerWidth / 2 + 80) * (2 - bar2percent), 55), createVector(window.outerWidth - 20 + barwedge, 55)];
	objects.healthbar2red.polygon = [createVector(window.outerWidth - 20, 20), createVector(window.outerWidth / 2 + 80 - barwedge, 20), createVector(window.outerWidth / 2 + 80, 55), createVector(window.outerWidth - 20 + barwedge, 55)];
}
