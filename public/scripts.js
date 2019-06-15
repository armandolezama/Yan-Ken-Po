
const g1PlayerInput = document.querySelector('#g1-player-input');
var g1PlayerValue = g1PlayerInput.value;

const g1ResultInput = document.querySelector('#g1-selection-input');
var g1PlayerSelection = g1ResultInput.value;

const g1PlayerName = document.querySelector('.g1-player-name');
const g1PlayerSelectionT = document.querySelector('.g1-result')

const g1PlayerResult = document.querySelector('.g1-result');

let openButton = ["",""]

document.querySelector(".g1ykp").disabled = true;

const g1Winner = document.querySelector('.g1-winner')

const options = ['piedra', 'papel', 'tijeras']

function g1PlayerNameF() {
    g1PlayerValue = g1PlayerInput.value;
    g1PlayerName.innerText = g1PlayerValue;
    openButton[0] = "1";
    if(openButton[0] == "1" && openButton[1] == "1"){
        document.querySelector(".g1ykp").disabled = false;
    }
}

function g1PlayerSelectionF(){
    g1PlayerSelection = g1ResultInput.value.toLowerCase();
    g1PlayerSelectionT.innerText = g1PlayerSelection;
    openButton[1] = "1";
    if(openButton[0] == "1" && openButton[1] == "1"){
        document.querySelector(".g1ykp").disabled = false;
    }
}


function yankenpoCo(){
    let computerOption = Math.floor(Math.random()*2.999);
    computerSelection = options[computerOption];

    if(
       ( computerSelection === 'tijeras' && g1PlayerSelection === 'papel') ||
       ( computerSelection === 'papel' && g1PlayerSelection === 'piedra') ||
       ( computerSelection === 'piedra' && g1PlayerSelection === 'tijeras')
    ) {
        g1Winner.innerText = "Perdiste!";
    } else if (
        ( computerSelection === 'papel' && g1PlayerSelection === 'tijeras') ||
        ( computerSelection === 'piedra' && g1PlayerSelection === 'papel') ||
        ( computerSelection === 'tijeras' && g1PlayerSelection === 'piedra') 
    ){
        g1Winner.innerText = "Tú ganas!"
    } else if (g1PlayerSelection === computerSelection)

    g1Winner.innerText = "Empate!"
}

/* A partir de aquí comienzan las funciones del segundo juego para dos jugadores*/



