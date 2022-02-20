var winner;
var draw;
var endgame = false;
var endtext = "";
var stopdraw = 0;

var countdown = 120;

function endGame(winner, draw) {
	//Winner = integer. 1 or 2 depending on who is the winner
	//Draw = boolean. False: Winner has won, true: Draw
	if (draw == false) {
		endgame = true;
		endtext = "Player " + winner + " wins!";
		if (winner == 1) {
			stopdraw = 2;
		} else {
			stopdraw = 1;
		}
	}
	if (draw == true) {
		endtext = "Draw...";
		endgame = true;
	}
}

var intervalID = window.setInterval(updateCountdown, 1000); //Countdown timer goes down by 1 every 1000 ms (aka, every 1 second)

function updateCountdown() {
	if(gamestarted == true){
		//Countdown timer in the middle of the screen
		if (endgame == false) { //Ensures that the timer stops once game is over for whatever reasons.
			countdown--;
			if (countdown == 0) {
				endGame(0, true); //Once the countdown timer goes down to 0, the endgame function is executed with  two arguments passed through it.
			}
		}
	}
}


function checkFalldown(){
	if(players.player1.position.y > 1800){ //If player is below map by 1800 - 1080 pixels, the other player wins.
		endGame(2, false) //Player 2 wins if player 1 falls out of map
	}
	if(players.player2.position.y > 1800){
		endGame(1, false)

	}
}