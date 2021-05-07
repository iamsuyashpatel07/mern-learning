var numberOfDrumButton = document.querySelectorAll(".drum").length; //no. of times defined .drum class
/* on 
     click*/
for (var i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        sound(this.innerHTML);
        effect(this.innerHTML);
    });
}
/* on 
     keypress*/
for (var i = 0; i < numberOfDrumButton; i++) {
    document.addEventListener("keypress", function(event) {
        sound(event.key);
        effect(event.key);
    });
}

function sound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
    }
}



function effect(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("pressed");
    }, 400);

}