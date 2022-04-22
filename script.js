var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var colour3 = document.querySelector(".colour3");
var colour4 = document.querySelector(".colour4");
var colour5 = document.querySelector(".colour5");
var colour6 = document.querySelector(".colour6");
var cssBackground = document.querySelector('.cssBackground');
var cssTextColour = document.querySelector('.cssTextColour');
var cssTextShadow = document.querySelector('.cssTextShadow');
var body= document.getElementById("gradient");
var textHeadingSize = document.querySelector(".textHeadingSize");
var headingColour = document.querySelector(".headingColour");
var headingColour2 = document.querySelector(".heading2");




colour1.addEventListener("input" , changeColorGradient);
colour2.addEventListener("input" , changeColorGradient);
colour3.addEventListener("input" , changeTextColor);
colour4.addEventListener("input" , changeHeadingTexts);
colour5.addEventListener("input" , changeHeadingTexts);
colour6.addEventListener("input" , changeHeadingTexts);
textHeadingSize.addEventListener("input" , changeHeadingTextSize);

function changeHeadingTextSize(){
    headingColour.style.fontSize = textHeadingSize.value + "%" ;
    headingColour2.style.fontSize = textHeadingSize.value + "%" ;
    console.log(textHeadingSize.value);
}

function changeColorGradient(){ 
    body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    body.style.background = "-webkit-linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    cssBackground.textContent = body.style.background;
}
function changeTextColor () {
    body.style.color = colour3.value;
    cssTextColour.textContent = body.style.color;
}

function changeHeadingTexts() {
    
    headingColour.style.textShadow = "0 0 0.05em" + colour4.value +", 0 0 0.2em "+ colour5.value +", 0 0 0.3em " + colour6.value ;
    headingColour2.style.textShadow = "0 0 0.15em" + colour4.value +", 0 0 0.4em "+ colour5.value +", 0 0 0.4em " + colour6.value ;
    cssTextShadow.textContent = "text-shadow: " + headingColour.style.textShadow;
}

window.onload = function(){
    randomColourGradient();
    changeTextColor();
    changeHeadingTexts()
}

var randomBtn = document.querySelector("#Randomizer");
var random2Btn = document.querySelector("#Randomizer2");
var random3Btn = document.querySelector("#Randomizer3");



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

function randomTextShadow() {
    colour4.value = "#" + random();
    colour5.value = "#" + random();
    colour6.value = "#" + random();
    changeHeadingTexts()
}

randomBtn.addEventListener("click", randomColourGradient);
random2Btn.addEventListener("click", randomTextColor);
random3Btn.addEventListener("click", randomTextShadow);


function copyCss(cssColourValue) {
    navigator.clipboard.writeText(cssColourValue.textContent);
    alert("Colour Copied: " + cssColourValue.textContent);
}








