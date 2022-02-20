let blurBackgroundImage;
let backgroundImage;
let fantasyFont;
let button1;

let tipWASD;
let tipARROWS;
let tipRTYC;
let tipCDDS; //CDDS = Command dot dash shift

function imageloading(){
        backgroundImage = loadImage('static/textures/cyberpunk-characters-pixel-art/industrial-zone-tileset-pixel-art/Background/Background.png');
        blurBackgroundImage = loadImage('static/textures/cyberpunk-characters-pixel-art/industrial-zone-tileset-pixel-art/Background/blurredBackground.png');
        fantasyFont = loadFont('static/Fantasy.ttf');
        button1 = loadImage('static/textures/buttontext.png');

        
}

function showMainMenu(){
        image(blurBackgroundImage,-200 + mouseX / 10,-200 + mouseY / 10, 1920+200,1080+200); //Adding 200 to the borders allows for the image to move in accordance to the mouse.

        //"FIGHT GAME" text
        textSize(128); 
        textAlign(CENTER);
        textFont(fantasyFont);
        let textX = width / 2 - (mouseX - width/2) / 30; //looks very complicated but it just sets the position and makes it move a bit depending on mouseX and mouseY values.
        let textY = height/4 - (mouseY - height/2) / 30; //looks very complicated but it just sets the position and makes it move a bit depending on mouseX and mouseY values.
        let disttext = dist(mouseX, mouseY, textX, textY);
        fill(255 - disttext / 5,0,0);
        text("FIGHT GAME", textX, textY);

        //start game button
        let buttonX = width / 2 - (mouseX - width/2) / 30; //looks very complicated but it just sets the position and makes it move a bit depending on mouseX and mouseY values.
        let buttonY = height/4 - (mouseY - height/2) / 30; //looks very complicated but it just sets the position and makes it move a bit depending on mouseX and mouseY values.
        image(button1, buttonX - 467 / 2, buttonY + 100, 467, 133);

        //Rectangle behind control tips.
        strokeWeight(0)
        fill(189,40,40,90);
        rect(0, buttonY + 250, width, height);

        //Control tips.
        image(tipWASD, buttonX - 900, buttonY + 300, 272, 236);
        image(tipRTYC, buttonX - 500, buttonY + 380, 354, 146);

        image(tipARROWS, buttonX, buttonY + 300, 272, 236);
        image(tipCDDS, buttonX + 350, buttonY + 385, 525, 145);

        fill(0,0,255);
        textSize(64); 
        text("CONTROLS", textX, textY + 620);

        //Collision check for button
        if(mouseIsPressed){
                let hit = collidePointRect(mouseX, mouseY, buttonX - 467 /2 , buttonY + 100, 467, 133);
                if(hit == true){
                        destroyMainMenu();
                }
        }
}

function destroyMainMenu(){
        gamestarted = true;
}