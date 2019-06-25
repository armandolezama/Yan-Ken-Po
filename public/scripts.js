
/* Esta sección corresponde al primer juego sin personalizar 
const g1PlayerInput = document.querySelector('#g1-player-input');
var g1PlayerValue = g1PlayerInput.value;

const g1ResultInput = document.querySelector('#g1-selection-input');
var g1PlayerSelection = g1ResultInput.value;

const g1PlayerName = document.querySelector('.g1-player-name');
const g1PlayerSelectionT = document.querySelector('.g1-result')

*/
/*Las siguientes funciones, constantes y variables salen de uso
let openButton = ["",""]

document.querySelector(".g1ykp").disabled = true;

const g1Winner = document.querySelector('.g1-winner')


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
}*/

const gameMode = document.querySelector('#mode-choice');
const playerName = document.querySelector('.player-name');

const options = ['Piedra', 'Papel', 'Tijeras']
var player1 = {
    name : "",
    election : "",
    imagen: ""
};

var player2 = {
    name : "",
    election : "",
    imagen: ""

};

let isCPU = false;

function goToChoice(){
    if(gameMode.modeGame.value == 'pc') {
        player2.name = "CPU"
        let computerOption = Math.floor(Math.random()*2.999);
        player2.election = options[computerOption];
        isCPU = true;
    } else if(gameMode.modeGame.value == 'player'){
        player2.name = "";
        player2.election = "";
        isCPU = false;
    } else {
        alert('Error');
        console.log('Error')
    }
}


function yankenpo(firstOption, secondOption){

    if(
       ( firstOption === 'tijeras' && secondOption === 'papel') ||
       ( firstOption === 'papel' && secondOption === 'piedra') ||
       ( firstOption === 'piedra' && secondOption === 'tijeras')
    ) {
        g1Winner.innerText = "Perdiste!";
    } else if (
        ( firstOption === 'papel' && secondOption === 'tijeras') ||
        ( firstOption === 'piedra' && secondOption === 'papel') ||
        ( firstOption === 'tijeras' && secondOption === 'piedra') 
    ){
        g1Winner.innerText = "Tú ganas!"
    } else if (g1PlayerSelection === computerSelection)

    g1Winner.innerText = "Empate!"
}

/* A partir de aquí comienzan las funciones del segundo juego para dos jugadores*/
/*Las siguientes funciones, constantes y variables salen de uso
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
*/