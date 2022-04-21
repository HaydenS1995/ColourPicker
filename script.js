var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var colour3 = document.querySelector(".colour3");
var cssBackground = document.querySelector('.cssBackground');
var cssTextColour = document.querySelector('.cssTextColour');
var body= document.getElementById("gradient");


colour1.addEventListener("input" , changeColorGradient);
colour2.addEventListener("input" , changeColorGradient);
colour3.addEventListener("input" , changeTextColor);


function changeColorGradient(){ 
    body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    body.style.background = "-webkit-linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    cssBackground.textContent = body.style.background;
}
function changeTextColor () {
    body.style.color = colour3.value;
    cssTextColour.textContent = body.style.color;
}

window.onload = function(){
    randomColourGradient();
    changeTextColor();
}

var randomBtn = document.querySelector("#Randomizer");


function random() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

function randomColourGradient() {
    colour1.value =  "#" + random();
    colour2.value =  "#" + random();
    changeColorGradient();
}

randomBtn.addEventListener("click", randomColourGradient);


function copyBackground() {
    navigator.clipboard.writeText(cssBackground.textContent);
    alert("Background Colour Copied: " + cssBackground.textContent);
}

function copyFontColour() {
    navigator.clipboard.writeText(cssTextColour.textContent);
    alert("Background Colour Copied: " + cssTextColour.textContent);
}







