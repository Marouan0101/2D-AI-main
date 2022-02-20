
var map = {
        metainfo:{
                name:"testmap1",
                description:"test map asdasd",
                id:0,
        }
}

var blocks = [];




function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	console.log(window);
}
var selectedtool = -1;
var sx;
var sy;

function draw() {
	background(100);
	mx = mouseX / window.innerWidth;
	my = mouseY / window.innerHeight;
	text("x: " + mx + ", y: " + my, mouseX, mouseY);
        rendermap();
        renderTilemap();
        drawGrid();
	findSquare(mouseX, mouseY);
	tools();
        renderToolMenus();
}

function renderTilemap(){
        for(let i=0; i< blocks.length ;i++){
                fill(255,0,0);
                rect(blocks[i].x * 64,blocks[i].y * 64,64,64);
                fill(255,255,255);
        }
}

function findSquare(x1, y1) {
	sqX = Math.floor(x1 / 64);
	sqY = Math.floor(y1 / 64);
	if (sqX < 19 && sqY < 13) {
		rect(sqX * 64, sqY * 64, 64, 64);
                //img = getSquareImage(selectedtool);
                //image(img,sqX*64,sqY*64);
        
	}
}

var selectedtexture = 0;

function getSquareImage(img){
        
}

function mouseClicked(){
        let hit = arrowClickCheck();
        print(hit);
        if(hit == false){
                sqX = Math.floor(mouseX / 128); //128 instead of 64 due to button size
                sqY = Math.floor((mouseY- 64) / 128);
                //print(sqX + ", " + sqY)
                var sx = (19*64) + 64;
                var sy = 64;
                var toolcount = 0;
                for(i=0;i<4;i++){
                        for(j=0;j<2;j++){
                                x1 = sx + j*192;
                                x2 = x1+128;
                                y1 = sy;
                                y2 = sy + 128;
                                //print("x1 : " + x1 + ", x2: " + x2);
                                if(mouseX > x1 && mouseX < x2){
                                        if(mouseY > y1 && mouseY < y2){
                                                clickTool(toolcount);
                                        }
                                }
                                toolcount++;
                        }
                        sy += 192;
                }
                
                sqX = Math.floor(mouseX / 64); //change to 64 pixels rather than the earlier 128 since the 128 is for the button size
                sqY = Math.floor(mouseY / 64);
                if (sqX < 19 && sqY < 13) { //Only make the grid clickable
                        if(selectedtool == 0){
                                setTile(sqX,sqY);
                        }
                }
                }
        else{
                selectedtexture = hit;
                print("asdasd")
        }
        
}



class Tile{
        constructor(x,y,texture){
                this.x = x;
                this.y = y;
                this.texture = texture;
        }
}

function setTile(sqX,sqY){
        //map.contents = new Tile(sqX,sqY,"texture");
        var temptile = new Tile(sqX,sqY,"texture");

        blocks.push(temptile);
        print(blocks);

}

function clickTool(clickedtool){
        if(selectedtool == clickedtool){
                selectedtool = (-1)
        }else{
                selectedtool = clickedtool;
        }
}

function drawGrid() {
	strokeWeight(1.5);
	for (i = 0; i < 14; i++) {
		//line(0,i*(window.innerHeight/10),window.innerWidth,i*(window.innerHeight/10));
		line(0, 64 * i, window.innerWidth, 64 * i);
	}
	for (i = 0; i < 20; i++) {
		//      line(i*(window.innerWidth/16),0,i * (window.innerWidth/16),window.innerHeight);
		line(64 * i, 0, 64 * i, window.innerWidth);
	}
}

function tools(){
        fill(20,120,200);
        rect(0,13*64,window.innerWidth,64);
        rect(19 * 64, 0 ,20*64,window.innerHeight);
        var sx = (19*64) + 64;
        var sy = 64;
        fill(100,120,160);
        var toolnum = 0;
        for(i=0;i<4;i++){
                for(j=0;j<2;j++){
                        if(selectedtool == toolnum){
                                
                                fill(100,120,200);
                                stroke(200,200,0);
                                strokeWeight(3);
                        }else{
                                fill(100,120,160);
                                stroke(0,0,0);
                                strokeWeight(1.5);
                        }
                        rect(sx + (j*192),sy,128,128);
                        textSize(32)
                        text("TOOL" + toolnum, sx + (j*192),sy);
                        toolnum++;
                        if(toolnum == 1){
                                fill(255,0,0);
                                stroke(0,0,0);
                                strokeWeight(1.5);
                                rect(sx + (j*192) + 20,sy + 20,128 - 40,128 - 40);
                        }

                        //toolimg = getImage(toolnum);
                        //image(toolimg,sx+(j*192),sy);
                }
                sy += 192;
        }
}

function renderToolMenus(){
        if(selectedtool == 0){
                var sx = (14*64);
                var sy = 64;
        
                fill(200);
                rect(sx, sy, 320, 150);
                fill(25);
                strokeWeight(0);
                text("Select en texture", sx + 10,sy+25)

                fill(255,selectedtexture * 250,0);
                
                rect(sx+110,sy+50, 80,80);

                fill(255,200,0);
                var tx1 = sx+30;
                var ty1 = sy+60;
                var tx2 = sx+20;
                var ty2 = sy+80;
                var tx3 = sx+30;
                var ty3 = sy+100;
                triangle(tx1, ty1, tx2, ty2, tx3, ty3)

                fill(255,200,0);
                var tx1 = sx+300;
                var ty1 = sy+60;
                var tx2 = sx+310;
                var ty2 = sy+80;
                var tx3 = sx+300;
                var ty3 = sy+100;
                triangle(tx1, ty1, tx2, ty2, tx3, ty3)
        }
}

function arrowClickCheck(){
        var sx = (14*64);
        var sy = 64;

        var tx1 = sx+30;
        var ty1 = sy+60;
        var tx2 = sx+20;
        var ty2 = sy+80;
        var tx3 = sx+30;
        var ty3 = sy+100;
        triangle(tx1, ty1, tx2, ty2, tx3, ty3)
        hit1 = collidePointTriangle(mouseX, mouseY, tx1, ty1, tx2, ty2, tx3, ty3);

        var t2x1 = sx+300;
        var t2y1 = sy+60;
        var t2x2 = sx+310;
        var t2y2 = sy+80;
        var t2x3 = sx+300;
        var t2y3 = sy+100;
        triangle(t2x1, t2y1, t2x2, t2y2, t2x3, t2y3)
        hit2 = collidePointTriangle(mouseX, mouseY, t2x1, t2y1, t2x2, t2y2, t2x3, t2y3);
        if(hit2 == true){
                return hit2;
        }else{
                return hit1;
        }
}

function rendermap(){
        
}


