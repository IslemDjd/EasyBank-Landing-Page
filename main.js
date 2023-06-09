function aHover(element){
    var nextS = element.nextSibling;
    nextS.style.opacity = "1";
}    

function aUnhover(element){
    var nextS = element.nextSibling;
    nextS.style.opacity = "0";

}

const toggleButton = document.getElementsByClassName('toggle')[0];
const nav_btn = document.getElementsByClassName('nav-btn')[0];

toggleButton.addEventListener('click',() =>{
    nav_btn.classList.toggle('active');
});