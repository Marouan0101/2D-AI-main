var biker = [];
var cyborg = [];
var punk = [];

function loadAnim(sname, sstring) {
	//Loads all animations and puts them into an object.
	sname.idle = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_idle.png", 48, 48, 4);
	sname.hurt = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_hurt.png", 48, 48, 2);
	sname.run = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_run.png", 48, 48, 6);
	sname.attack1 = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_attack1.png", 48, 48, 6);
	sname.attack2 = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_attack2.png", 48, 48, 8);
	sname.attack3 = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_attack3.png", 48, 48, 8);
	sname.runAttack = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_run_attack.png", 48, 48, 6);
	sname.jump = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_jump.png", 48, 48, 4);
	sname.doubleJump = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_doublejump.png", 48, 48, 6);
	sname.punch = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_punch.png", 48, 48, 6);
	sname.climb = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_climb.png", 48, 48, 6);
	sname.death = loadSpriteSheet("static/textures/cyberpunk-characters-pixel-art/" + sstring + "/" + sstring + "_death.png", 48, 48, 6);
}

function preload() {
	//Preloads all animations
	loadAnim(biker, "biker");
	loadAnim(cyborg, "cyborg");
	loadAnim(punk, "punk");

	//Loads all images
	backgroundImage = loadImage('static/textures/cyberpunk-characters-pixel-art/industrial-zone-tileset-pixel-art/Background/Background.png');
	blurBackgroundImage = loadImage('static/textures/cyberpunk-characters-pixel-art/industrial-zone-tileset-pixel-art/Background/blurredBackground.png');
	fantasyFont = loadFont('static/Fantasy.ttf');
	button1 = loadImage('static/textures/buttontext.png');
	platformTexture = loadImage('static/textures/platformtexture.png');

	//Control tips
	tipWASD = loadImage('static/textures/keytips/WASD.png');
	tipARROWS = loadImage('static/textures/keytips/arrows.png');
	tipRTYC = loadImage('static/textures/keytips/RTYC.png');
	tipCDDS = loadImage('static/textures/keytips/CDDS.png');
}

function createAnimationObject(snameObj, sname) {
	snameObj.addAnimation("idle", sname.idle);
	snameObj.addAnimation("hurt", sname.hurt);
	snameObj.addAnimation("run", sname.run);
	snameObj.addAnimation("basicAttack", sname.punch);
	snameObj.addAnimation("primaryAttack", sname.attack1);
	snameObj.addAnimation("secondaryAttack", sname.attack2);
	snameObj.addAnimation("specialAttack", sname.attack3);
	snameObj.addAnimation("runAttack", sname.runAttack);
	snameObj.addAnimation("jump", sname.jump);
	snameObj.addAnimation("doubleJump", sname.doubleJump);
	snameObj.addAnimation("climb", sname.climb);
	snameObj.addAnimation("death", sname.death);
}

function setup() {
	createCanvas(1920, 1080); //Creates canvas. Code has support for variable window sizes, but 1920x1080 is used because it is full screen on most devices.
	definePolygons(); //Defines objects hitbox polygons and healthbar polygons

	gamestarted = false;

	bikerObj = createSprite(players.player1.position.x * 2, players.player1.position.y, players.player1.size.width, players.player1.size.height);
	cyborgObj = createSprite(players.player2.position.x * 2, players.player2.position.y, players.player2.size.width, players.player2.size.height);
	//punkObj = createSprite(players.player1.position.x * 2, players.player1.position.y, players.player1.size.width, players.player1.size.height); //Alternative player model. Disabled

	createAnimationObject(bikerObj, biker);
	createAnimationObject(cyborgObj, cyborg);
	//createAnimationObject(punkObj, punk);

	bikerObj.animation.frameDelay = 8;
	cyborgObj.animation.frameDelay = 8;
	//punkObj.animation.frameDelay = 6;

	cyborgObj.mirrorX(-1); //Mirrors animations for player 2, because they are on the other side, facing player 1.
	console.log(bikerObj);
}
