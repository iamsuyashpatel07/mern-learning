function bmi() {
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    document.getElementById('output').value = Math.round(w / Math.pow(h, 2));
}