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
    cssTextColour.textContent = body.style.color;
    body.style.color = colour3.value;
}

window.onload = function(){
    randomColourGradient();
    changeTextColor();
}

var randomBtn = document.querySelector("#Randomizer");
var random2Btn = document.querySelector("#Randomizer2");


function random() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

function randomColourGradient() {
    colour1.value =  "#" + random();
    colour2.value =  "#" + random();
    changeColorGradient();
}

function randomTextColor(){
    colour3.value =  "#" + random();
    changeTextColor();
}

randomBtn.addEventListener("click", randomColourGradient);
random2Btn.addEventListener("click", randomTextColor);


function copyBackground(cssColourValue) {
    navigator.clipboard.writeText(cssColourValue.textContent);
    alert("Colour Copied: " + cssColourValue.textContent);
}








