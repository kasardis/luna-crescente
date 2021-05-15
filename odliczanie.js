//Funkcja pomocnicza
function displayNumber(number){
    if (number < 10) {
        number = '0' + number;
        return number;
    } else {
        return number;
    }
}

//Główna funkcja
function odliczanie(){
    let timer = document.getElementById("timer");
    let current = new Date();
    let newYear = new Date(2022, 0, 1);

    current = current.getTime();
    newYear = newYear.getTime();

    let waiting = newYear- current;
    let sec = Math.floor(waiting / 1000);
    let mins = Math.floor(sec / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);

    sec %= 60;
    mins %= 60;
    hours %= 24;

    timer.innerHTML = days + ' : ' + displayNumber(hours) + ' : ' + displayNumber(mins) + " : " + displayNumber(sec);

    if (waiting <= 0) {
        timer.innerHTML = "NOWY ROK!!! &#127881;";
    } 
}

//Wywołanie funkcji
odliczanie();
let timerID = setInterval(() => {
    odliczanie();
}, 1000);