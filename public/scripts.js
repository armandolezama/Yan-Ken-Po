
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

const options = ['pieda', 'papel', 'tijera']

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


function yankenpoCo() {

    g1PlayerSelection = g1ResultInput.value;
}





/*
const playerInput2 = document.querySelector('#player-input1');
var playerValue2 = playerInput2.value;*/



let computerSelection = Math.floor(Math.random()*2.99)

/*
function guardarNombre(){
    playerValue1 = playerInput1.value;
    playerName.innerText = playerValue1
};
*/

function startGame(){

}