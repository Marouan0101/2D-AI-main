var effects = [];
effects.shake = {
    x:0,
    y:0,
};

function shake(strength){ //Makes the camera shake by adding random value movement to the x and y value of all objects in the scene
	effects.shake.x = random(-strength,strength); //random x value
	effects.shake.y = random(-strength,strength); //random y value
    for(let i = 0; i < 10; i++){ //The objects slowly return to their original position every 20ms.
        let shakeCounter = window.setInterval(shakeDown, 20);
    }
    //shakex = 0;
    //shakey = 0;
}

function shakeDown(){
    effects.shake.x = effects.shake.x * 0.99;
    effects.shake.y = effects.shake.y * 0.99;
    //The values are multiplied by 0.99 to make the shake slightly less every frame, until it is set to 0 after 10 frames.
}