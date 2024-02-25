// o'zim qildim


let input = document.querySelector('input');
let div = document.querySelector('.diiiv');
let matn = document.querySelector('.lol');

function chiqarish() {
    let inputValue = input.value;

    console.log(inputValue);


    let yangi = document.createElement('div');
    yangi.textContent = inputValue;


    matn.appendChild(yangi);


    input.value = '';
}





// Internetdan oldim

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerText = timeString;
}

// Soatni har 1 sekundda bir yangilash
setInterval(updateClock, 1000);

// Sahifani yuklagandan so'ng bir marta soatni yangilash
updateClock();