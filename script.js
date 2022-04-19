var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var css = document.querySelector('h3');
var body= document.getElementById("gradient")

colour1.addEventListener("input" , changeColorGradient);
colour2.addEventListener("input" , changeColorGradient);

function changeColorGradient(){ 
    body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    css.textContent = body.style.background;
}




