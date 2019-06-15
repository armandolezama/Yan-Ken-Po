
const g1PlayerInput = document.querySelector('#g1-player-input');
var g1PlayerValue = g1PlayerInput.value;

const g1ResultInput = document.querySelector('#g1-selection-input');
var g1PlayerSelection = g1ResultInput.value;

const g1PlayerName = document.querySelector('.g1-player-name');
const g1PlayerSelectionT = document.querySelector('.g1-result')
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

const g2PlayerInput1 = document.querySelector("#g2-player-input1");
var g2Player1Value = g2PlayerInput1.value;

const g2SelectionInput1 = document.querySelector("#g2-selection-input1");
var g2Selection1Value = g2SelectionInput1.value.toLowerCase();


const g2PlayerInput2 = document.querySelector("#g2-player-input2");
var g2Player2Value = g2PlayerInput2.value;

const g2SelectionInput2 = document.querySelector("#g2-selection-input2");
var g2Selection2Value = g2SelectionInput2.value.toLowerCase();

const g2p1Name = document.querySelector(".g2p1-name");
const g2p1Selection = document.querySelector(".g2p1-selection");
const g2p2Name = document.querySelector(".g2p2-name");
const g2p2Selection = document.querySelector(".g2p2-selection");

const g2Winner = document.querySelector(".g2-winner")
let g2OpenButton = ["", "", "", ""]
document.querySelector(".g2ykp").disabled = true;

function g2Player1NameF(){
    g2Player1Value = g2PlayerInput1.value;
    g2p1Name.innerText = g2Player1Value;
    g2OpenButton[0] = "1";
    if(g2OpenButton[0] == "1" && g2OpenButton[1] == "1" && g2OpenButton[2] == "1" && g2OpenButton[3] == "1"){
        document.querySelector(".g2ykp").disabled = false;
    }
}

function g2Player1SelectionF(){
    g2Selection1Value = g2SelectionInput1.value.toLowerCase();
    g2p1Selection.innerText = g2Selection1Value;
    g2OpenButton[1] = "1";
    if(g2OpenButton[0] == "1" && g2OpenButton[1] == "1" && g2OpenButton[2] == "1" && g2OpenButton[3] == "1"){
        document.querySelector(".g2ykp").disabled = false;
    }
}

function g2Player2NameF(){
    g2Player2Value = g2PlayerInput2.value;
    g2p2Name.innerText = g2Player2Value;
    g2OpenButton[2] = "1";
    if(g2OpenButton[0] == "1" && g2OpenButton[1] == "1" && g2OpenButton[2] == "1" && g2OpenButton[3] == "1"){
        document.querySelector(".g2ykp").disabled = false;
    }
}

function g2Player2SelectionF(){
    g2Selection2Value = g2SelectionInput2.value.toLowerCase();
    g2p2Selection.innerText = g2Selection2Value;
    g2OpenButton[3] = "1";
    if(g2OpenButton[0] == "1" && g2OpenButton[1] == "1" && g2OpenButton[2] == "1" && g2OpenButton[3] == "1"){
        document.querySelector(".g2ykp").disabled = false;
    }
}

function yankenpog2(){
    if(
        ( g2Selection2Value === 'tijeras' && g2Selection1Value === 'papel') ||
        ( g2Selection2Value === 'papel' && g2Selection1Value === 'piedra') ||
        ( g2Selection2Value === 'piedra' && g2Selection1Value === 'tijeras')
     ) {
         g2Winner.innerText = "Gana " + g2Player2Value + " y pierde " + g2Player1Value;
     } else if (
         ( g2Selection2Value === 'papel' && g2Selection1Value === 'tijeras') ||
         ( g2Selection2Value === 'piedra' && g2Selection1Value === 'papel') ||
         ( g2Selection2Value === 'tijeras' && g2Selection1Value === 'piedra') 
     ){
         g2Winner.innerText = "Gana " + g2Player1Value + " y pierde " + g2Player2Value;
     } else if (g2Selection1Value === g2Selection2Value)
 
     g2Winner.innerText = "Empate!"
 }
