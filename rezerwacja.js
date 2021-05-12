let date = new Date();
let godziny = document.getElementById("godzina");
let daty = document.getElementById("data");
let form = document.getElementById("form");

function godziny_setup(){
    if(date.getHours() > 18){
        date.setDate(date.getDate() + 1);
        date.setHours(8);
    }
    for (let i = 0; i < godziny.children.length; i++){
        if(date.getHours() + 1 > parseInt(godziny.children[i].value[0] + godziny.children[i].value[1])){
            godziny.children[i].remove();
            i--;
        }
    }
}

function displayNumber(number){
    if (number < 10) {
        number = '0' + number;
        return number;
    } else {
        return number;
    }
}

function daty_setup(){
    for(let i = 0; i < 7; i++){
        let d = date.getDate();
        let m = date.getMonth();
        let r = date.getFullYear();
        let val = displayNumber(d) + '.' + displayNumber(m) + '.' + r;
        daty.innerHTML += '<option value="' + val + '">' + val + '</option>';
        date.setDate(d + 1);
    }
}

godziny_setup();
daty_setup();

function validate_datalist(datalistId){
    let datalist = document.getElementById(datalistId);
    for(let i = 0; i < datalist.children.length; i++){
        if(form[datalistId].value == datalist.children[i].value){
            return true;
        }
    }
    return false;
}

function validate_number(num, min, max){
    if(num > max || num < min){
        return false;
    } else {
        return true;
    }
}

function validate_string(str){
    if(str){
        return true;
    } else {
        return false;
    }
}

function validate(){
    if(!(validate_datalist("godzina") && validate_datalist("data"))){
        form.innerHTML = "<p style='text-align: center'>Wpisz poprawną godzinę i datę</p><button id='powrot'>Zmień</button>";
        return;
    } else if(!validate_number(form.liczbaOsob.value, 1, 20)) {
        form.innerHTML = "<p style='text-align: center'>Wpisz liczbę osób pomiędzy 1 i 20</p><button id='powrot'>Zmień</button>";
        return;
    } else if(!validate_string(form.nazwisko.value)){
        form.innerHTML = "<p style='text-align: center'>Wpisz nazwisko</p><button id='powrot'>Zmień</button>";
        return;
    } else if(!validate_string(form.numerTelefonu.value)){
        form.innerHTML = "<p style='text-align: center'>Wpisz numer telefonu</p><button id='powrot'>Zmień</button>";
        return;
    } else {
        form.innerHTML = `
            <p>Liczba osób:  ${form.liczbaOsob.value}<br>
            Rezerwacja na nazwisko:  ${form.nazwisko.value}<br>
            Numer telefonu:  ${form.numerTelefonu.value}<br>
            Godzina:  ${form.godzina.value}<br>
            Data:  ${form.data.value}<p>
            <button id="powrot">Zmień</button>`;
        return;
    }
}

document.getElementById("submit").onclick = validate;