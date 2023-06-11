function aHover(element){
    var nextS = element.nextSibling;
    nextS.style.opacity = "1";
}    

function aUnhover(element){
    var nextS = element.nextSibling;
    nextS.style.opacity = "0";

}


function svgHover(element){
    element.style.fill = "hsl(136, 65%, 51%)";
}    

function svgUnhover(element){
    element.style.fill = "#FFF";

}

const toggleButton = document.getElementsByClassName('toggle')[0];
const nav_btn = document.getElementsByClassName('nav-btn')[0];
const inter = document.getElementsByClassName('interface')[0];
var closePNG = document.getElementById("close");

toggleButton.addEventListener('click',() =>{
    nav_btn.classList.toggle('active');
    inter.classList.toggle('activeInterface');
    closePNG.style.display = "block";
    toggleButton.style.display = "none";

});

closePNG.addEventListener('click',() =>{
    nav_btn.classList.toggle('active');
    inter.classList.toggle('activeInterface');
    closePNG.style.display = "none";
    toggleButton.style.display = "block";

});

