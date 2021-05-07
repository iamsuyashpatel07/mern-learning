var h1 = (Math.floor(Math.random() * 6)) + 1;
var h2 = (Math.floor(Math.random() * 6)) + 1;

var first = "images/" + "dice" + h1 + ".png";
var second = "images/" + "dice" + h2 + ".png";
if (h1 > h2) {
    document.querySelector("h1").textContent = "🎈Play 1 Wins!"; //textContent
} else if (h1 < h2) {
    document.querySelector("h1").innerText = "🎈Play 2 Wins!"; //innerTEXT
} else {
    document.querySelector("h1").innerHTML = "🎈Draw!"; //innerHTML
}

document.querySelectorAll("img")[0].setAttribute("src", first);
document.querySelectorAll("img")[1].setAttribute("src", second);