const D4 = document.querySelector("#D4");
const D6 = document.querySelector("#D6");
const D8 = document.querySelector("#D8");
const D10 = document.querySelector("#D10");
const D12 = document.querySelector("#D12");
const D20 = document.querySelector("#D20");


const D6number = Math.trunc(Math.random()*6) + 1;
const D8number = Math.trunc(Math.random()*8) + 1;
const D10number = Math.trunc(Math.random()*10) + 1;
const D12number = Math.trunc(Math.random()*12) + 1;
const D20number = Math.trunc(Math.random()*20) + 1;

  
function D4roll() {
    const D4number = Math.trunc(Math.random() * 4) + 1;
    document.getElementById('D4in').value = D4number;
}

function D6roll() {
    const D6number = Math.trunc(Math.random() * 6) + 1;
    document.getElementById('D6in').value = D6number;
}

function D8roll() {
    const D8number = Math.trunc(Math.random() * 8) + 1;
    document.getElementById('D8in').value = D8number;
}

function D10roll() {
    const D10number = Math.trunc(Math.random() * 10) + 1;
    document.getElementById('D10in').value = D10number;
}

function D12roll() {
    const D12number = Math.trunc(Math.random() * 12) + 1;
    document.getElementById('D12in').value = D12number;
}

function D20roll() {
    const D20number = Math.trunc(Math.random() * 20) + 1;
    document.getElementById('D20in').value = D20number;
}

function reset() {
    document.getElementById('D4in').value = '';
    document.getElementById('D6in').value = '';
    document.getElementById('D8in').value = '';
    document.getElementById('D10in').value = '';
    document.getElementById('D12in').value = '';
    document.getElementById('D20in').value = '';
}