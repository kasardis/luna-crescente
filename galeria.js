let setup = () => {
    let arr = [];
    for (let i = 0; i < document.getElementById("galeria").children.length; i++){
        let element = document.getElementById("galeria").children[i].children[0];
        element.onclick = change;
        arr.push(element.src);
    }
    return arr;
}

let sources = setup();
let photo = document.getElementById("photo");
let index = 0;

function change(){
    photo.src = event.target.src;
    index = sources.indexOf(event.target.src);
    document.getElementById("okno").style.display = "block";
}

function prev(){
    if (index <= 0){
        return;
    }
    index--;
    photo.src = sources[index];
}

function next(){
    if (index >= sources.length - 1){
        return;
    }
    index++;
    photo.src = sources[index];
}

document.getElementById("prev").onclick = prev;
document.getElementById("next").onclick = next;

function close(){
    document.getElementById("okno").style.display = "none";
}

document.getElementById("krzyżyk").onclick = close;