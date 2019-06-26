const gameMode = document.querySelector('#mode-choice');

//Las siguientes constantes son las pantallas 
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.section-choice')
const thirdScren = document. querySelector('.ready-screen')
const resultScreen = document.querySelector('.results')

//Esta función permite mantener seleccionadas las opciones elegidas 
const myOptions = document.querySelectorAll('.options')
const modeCase = document.querySelectorAll('.mode-option-case')

//Estas constantes permiten almacenar los datos de uno o dos jugadores, según las respuestas previas.
const playerName = document.querySelector('.player-name');
const optionSelected = document.querySelector('#first-options');

let readyHeadGo = document.querySelector('.ready-signboard');

let collectionPC = {
    choiceHead: document.querySelector('.vs-pc'),
    choiceButton: document.querySelector('#vs-human1'),
    readyButton: document.querySelector('#vs-human2')
};


let collectionPlayer = {
    choiceHeadP1: document.querySelector('.player1'),
    choiceHeadP2: document.querySelector('.player2-element'),
    choiceButton: document.querySelector('#vs-pc1'),
    readyHeadReady: document.querySelector('#vs-human3'),
    readyButton: document.querySelector('#vs-pc2')
}

let checkListEvents = {
    modeSelected: false,
    firstPlayerName: false,
    firstPlayerSelection: false,
    secondPlayerName: false,
    secondPlayerSelection: false,
    theResulst: false
}

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

//let isCPU = false;

for(let element of myOptions) {
    element.addEventListener('click', function() {
      for(let label of myOptions) {
          label.classList.remove('active');
      }
      element.classList.add('active');
    })
}
  
for(let element of modeCase){
  element.addEventListener('click', function() {
      for(let label of modeCase) {
          label.classList.remove('active');
        }
        element.classList.add('active');
    })
}

function pcEnable() {
    collectionPC.choiceHead.style.display = 'inline-block';
    collectionPC.choiceButton.style.display = 'inline-block';
    collectionPC.readyButton.style.display = 'inline-block';
}
    
function pcDisabled(){
    collectionPC.choiceHead.style.display = 'none';
    collectionPC.choiceButton.style.display = 'none';
    collectionPC.readyButton.style.display = 'none';
}

function player2Enable() {
    collectionPlayer.choiceHeadP1.style.display = 'inline-block';
    collectionPlayer.choiceHeadP2.style.display = 'inline-block';
    collectionPlayer.choiceButton.style.display = 'inline-block';
    collectionPlayer.readyHeadReady.style.display = 'inline-block';
    collectionPlayer.readyButton.style.display = 'inline-block';    
}

function player2Disable() {
    collectionPlayer.choiceHeadP1.style.display = 'none';
    collectionPlayer.choiceHeadP2.style.display = 'none';
    collectionPlayer.choiceButton.style.display = 'none';
    collectionPlayer.readyHeadReady.style.display = 'none';
    collectionPlayer.readyButton.style.display = 'none';
}

function goToChoice(){
    if(gameMode.modeGame.value == 'pc') {
        player2.name = "CPU";
        let computerOption = Math.floor(Math.random()*2.999);
        player2.election = options[computerOption];
//        isCPU = true;
        checkListEvents.modeSelected = true;
        checkListEvents.secondPlayerName = true;
        checkListEvents.secondPlayerSelection = true;
        secondScreen.style.display = 'block';
        readyHeadGo.style.display = 'inline-block';
        //firstScreen.style.display = 'none';
        pcEnable();
        player2Disable();
    } else if(gameMode.modeGame.value == 'player'){
        player2.name = "";
        player2.election = "";
//        isCPU = false;
        checkListEvents.modeSelected = true;
        checkListEvents.secondPlayerName = false;
        checkListEvents.secondPlayerSelection = false;
        secondScreen.style.display = 'block';
        //firstScreen.style.display = 'none';
        pcDisabled();
        player2Enable();
        collectionPlayer.choiceHeadP2.style.display = 'none';
        readyHeadGo.style.display = 'none';
    } else {
        alert('Escoge una opción para continuar');
        console.log('Nothing selected');
    }
}


function backToLastScren() {

}

function goToNextScreen() {


}

function restart() {

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

/* 
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