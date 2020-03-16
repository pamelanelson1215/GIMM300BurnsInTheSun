var thisIsAGlobalVariable = "hello world";

function getRandomNum(){
    return Math.floor(Math.random()*6)+1;
}

function switchPictures() {
    var pictureToSwitch = document.getElementById("picture");
    var pictureToSwitch2 = document.getElementById("picture2");
    var num = getRandomNum();
    
    if(num == 1){
        pictureToSwitch.src = "1.png"
    }

    if(num == 2){
        pictureToSwitch.src = "2.png"
    }

    if(num == 3){
        pictureToSwitch.src = "3.png"
    }

    if(num == 4){
        pictureToSwitch.src = "4.png"
    }

    if(num == 5){
        pictureToSwitch.src = "5.png"
    }

    if(num == 6){
        pictureToSwitch.src = "6.png"
    }

    var num = getRandomNum();

    if(num == 1){
        pictureToSwitch2.src = "1.png"
    }

    if(num == 2){
        pictureToSwitch2.src = "2.png"
    }

    if(num == 3){
        pictureToSwitch2.src = "3.png"
    }

    if(num == 4){
        pictureToSwitch2.src = "4.png"
    }

    if(num == 5){
        pictureToSwitch2.src = "5.png"
    }

    if(num == 6){
        pictureToSwitch2.src = "6.png"
    }
    
}