var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var css = document.querySelector('h3');
var body= document.getElementById("gradient");


colour1.addEventListener("input" , changeColorGradient);
colour2.addEventListener("input" , changeColorGradient);


function changeColorGradient(){ 
    body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    body.style.background = "-webkit-linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    css.textContent = body.style.background;
    
}

window.onload = function(){
    randomColourGradient();
}

var randomBtn = document.querySelector("#Randomizer");


function random() {
    return Math.floor(Math.random() * 13371337).toString(16);
  }

function randomColourGradient() {
    colour1.value =  "#" + random();
    colour2.value =  "#" + random();
    changeColorGradient();
}

randomBtn.addEventListener("click", randomColourGradient);


function copyText() {
    navigator.clipboard.writeText(css.textContent);
    alert("Background Colour Copied: " + css.textContent);
}








