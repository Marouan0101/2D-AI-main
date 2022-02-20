function collisionCheck(col1, col2) { //Collision check between the players and the platform. 
	hit = collidePolyPoly(col1.polygon, col2.polygon); //Uses collide2D.js library to figure out if the player polygon and the platform polygon are colliding.
	col1.collision.ground = hit;
	let updist;
	if (hit) { //If there is collision, then the double jump counter is reset. This is because the player has landed on the ground again.
		col1.data.jumpcount = 2;

		//Fixes bug with getting stuck in the platform when going at a speed that is higher than a few pixels per frame.
		let a1 = col2.position.y;
		let a2 = col1.position.y + col1.size.height;
		let updist = a1 - a2;
		col1.position.y += updist; //:)
	}

	//Left/right of platform
	//TODO

	return hit; //Returns true if there is a collision. false if not. Obviously.
}

function returnCollisionCheck(col1, col2) {
	//Same as collisionCheck() but it only returns. Nothing else. Used in attack.js
	hit = collidePolyPoly(col1.polygon, col2.polygon);
	return hit;
}
