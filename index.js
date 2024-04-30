var num=document.querySelectorAll(".drum").length

for(var i=0 ;i < num ;i++){

document.querySelectorAll(".drum")[i].addEventListener("click" , play);



document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    if (["w", "a", "s", "d", "j", "k", "l"].includes(keyPressed)) {
        playByKey(keyPressed);
    }
});

function playByKey(keyPressed) {
    playSound(keyPressed);//keystrokes
}


function  play(){
var soundgenerated=this.innerHTML;//button 
playSound(soundgenerated);
}

// Function to play sound based on the key/button pressed
function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.currentTime = 0;
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.currentTime = 0;
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.currentTime = 0;
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.currentTime = 0;
            tom4.play();
            break;
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.currentTime = 0;
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.currentTime = 0;
            kick.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.currentTime = 0;
            snare.play();
            break;
        default:
            break;
    }
}

}
