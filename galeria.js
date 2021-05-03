let setup = () => {
    let arr = [];
    for (let i = 0; i < document.getElementById("galeria").children.length; i++){
        let element = document.getElementById("galeria").children[i].children[0];
        element.onclick = change;
        arr.push(element.src);
    }
    return arr;
}

let nazwyFunc = () => {
    let arr = [];
    for (let i = 0; i < document.getElementById("galeria").children.length; i++){
        let element = document.getElementById("galeria").children[i].children[1].innerHTML;
        arr.push(element);
    }
    return arr;
}

let sources = setup();
let nazwy = nazwyFunc();
let photo = document.getElementById("photo");
let nazwa = document.getElementById("nazwa");
let index = 0;

function change(){
    photo.src = event.target.src;
    index = sources.indexOf(event.target.src);
    nazwa.innerHTML = nazwy[index];
    document.getElementById("okno").style.display = "block";
}

function prev(){
    if (index <= 0){
        index = sources.length - 1;
        photo.src = sources[index];
        nazwa.innerHTML = nazwy[index];
        return;
    }
    index--;
    photo.src = sources[index];
    nazwa.innerHTML = nazwy[index];
}

function next(){
    if (index >= sources.length - 1){
        index = 0;
        photo.src = sources[index];
        nazwa.innerHTML = nazwy[index];
        return;
    }
    index++;
    photo.src = sources[index];
    nazwa.innerHTML = nazwy[index];
}

document.getElementById("prev").onclick = prev;
document.getElementById("next").onclick = next;

function close(){
    document.getElementById("okno").style.display = "none";
}

document.getElementById("krzyżyk").onclick = close;