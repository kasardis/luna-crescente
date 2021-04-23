let sources = {
    "link-przystawki": document.getElementById("przystawki"),
    "link-zupy": document.getElementById("zupy"),
    "link-glowne": document.getElementById("glowne"),
    "link-salatki": document.getElementById("salatki"),
    "link-dodatki": document.getElementById("dodatki"),
    "link-napoje": document.getElementById("napoje"),
    "link-desery": document.getElementById("desery"),
}

let state = "link-przystawki";

function defaultStyle(element){
    element.children[0].style.border = "0px";
    element.children[1].style.fontWeight = "normal";
    element.children[1].style.color = "black";
}

function clickedStyle(element){
    element.children[0].style.border = "3px outset #ff3838";
    element.children[1].style.fontWeight = "bold";
    element.children[1].style.color = "#ff3838";
}

function change(){
    defaultStyle(document.getElementById(state));
    sources[state].style.display = "none";
    state = event.target.classList[0];
    sources[state].style.display = "block";
    clickedStyle(document.getElementById(state));
}

document.getElementById("link-przystawki").addEventListener("click", change);
document.getElementById("link-zupy").addEventListener("click", change);
document.getElementById("link-glowne").addEventListener("click", change);
document.getElementById("link-salatki").addEventListener("click", change);
document.getElementById("link-dodatki").addEventListener("click", change);
document.getElementById("link-napoje").addEventListener("click", change);
document.getElementById("link-desery").addEventListener("click", change);