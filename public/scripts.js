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
let optionSelected = document.querySelector('#choose');


const readyHeadGo = document.querySelector('.ready-signboard');

const optionsImages = ["imagenes/greekArmy.jpg", "imagenes/japaneseArmy.jpeg", "imagenes/hunosArmy.jpg"];

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
    thirdScreenWasShowed: false,
    thirdScreenShouldShowed: false,
    secondPlayerName: false,
    secondPlayerSelection: false,
    theResulst: false
}

const options = ['Griegos', 'Japoneses', 'Hunos']
var player1 = {
    name : "",
    election : ""
};

var player2 = {
    name : "",
    election : ""
};

let secondPlayerData = false;

let contEvent = false;

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
        firstScreen.style.display = 'none';
        checkListEvents.thirdScreenShouldShowed = true;
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
        firstScreen.style.display = 'none';
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

    if (
        thirdScren.style.display == 'block' && 
        checkListEvents.secondPlayerName == true && 
        checkListEvents.secondPlayerSelection == true
        ) {
            secondScreen.style.display = 'block';
            player2.name = '';
            player2.election = '';
            optionSelected.reset();
            playerName.value = '';
            checkListEvents.secondPlayerName = false;
            checkListEvents.secondPlayerSelection = false;
            contEvent = false;
        }

        for(let label of myOptions) {
            label.classList.remove('active');
        }

/*    if (
        secondScreen.style.display == 'block' && 
        checkListEvents.secondPlayerName == true && 
        checkListEvents.secondPlayerSelection == true
        ) */

}

function goToNextScreen() {

    /*const firstScreen = document.querySelector('.first-screen');
    const secondScreen = document.querySelector('.section-choice')
    const thirdScren = document. querySelector('.ready-screen')
    const resultScreen = document.querySelector('.results') */

    if (playerName.value == "" && checkListEvents.firstPlayerName == false ){
        alert('Escribe tu nombre, guerrero.');
    } else if(checkListEvents.firstPlayerName == false){
        player1.name = playerName.value;
        checkListEvents.firstPlayerName = true;
    }

    if(optionSelected.selection.value == '' && checkListEvents.firstPlayerSelection == false) {
        alert('haz tu elección, guerrero')
    } else if(checkListEvents.firstPlayerSelection == false) {
        player1.election = optionSelected.selection.value;
        checkListEvents.firstPlayerSelection = true;
    }
    
    if (checkListEvents.firstPlayerName == true && 
        checkListEvents.firstPlayerSelection == true &&
        secondPlayerData == false) {
        playerName.value = '';
        checkListEvents.thirdScreenShouldShowed = true;
        optionSelected.reset();
        for(let label of myOptions) {
            label.classList.remove('active');
        }
    }

    
    if(secondPlayerData && checkListEvents.thirdScreenShouldShowed == false) {
        secondScreen.style.display = 'block';
        collectionPlayer.choiceHeadP2.style.display = 'inline-block'
        collectionPlayer.choiceHeadP1.style.display = 'none'
    }
    
    if (secondPlayerData &&
        checkListEvents.firstPlayerSelection == true &&
        checkListEvents.secondPlayerSelection == false && 
        optionSelected.selection.value == '' && 
        collectionPlayer.choiceHeadP2.style.display == 'inline-block' &&
        checkListEvents.thirdScreenWasShowed == true &&
        contEvent == true) {
            alert('Haz tu elección, guerrero')
        } else if(secondPlayerData &&
        checkListEvents.firstPlayerSelection == true &&
        checkListEvents.secondPlayerSelection == false && 
        optionSelected.selection.value != '' && 
        collectionPlayer.choiceHeadP2.style.display == 'inline-block' &&
        checkListEvents.thirdScreenWasShowed == true &&
        contEvent == true){
            player2.election = optionSelected.selection.value;
            checkListEvents.secondPlayerSelection = true;
        }
    
    if(secondPlayerData &&
        checkListEvents.firstPlayerName == true &&
        checkListEvents.secondPlayerName == false && 
        playerName.value == '' && 
        collectionPlayer.choiceHeadP2.style.display == 'inline-block' &&
        checkListEvents.thirdScreenWasShowed == true &&
        contEvent == true){
            alert('Escribe tu nombre, guerrero')  
    } else if(secondPlayerData &&
        checkListEvents.firstPlayerName == true &&
        checkListEvents.secondPlayerName == false && 
        playerName.value == '' && 
        collectionPlayer.choiceHeadP2.style.display == 'inline-block' &&
        checkListEvents.thirdScreenWasShowed == true &&
        contEvent == false
        ){
        contEvent = true;     
    }   else if (secondPlayerData &&
    checkListEvents.firstPlayerName == true &&
    checkListEvents.secondPlayerName == false && 
        playerName.value != ''){
        player2.name = playerName.value;
        checkListEvents.secondPlayerName = true;
    }


    if( checkListEvents.firstPlayerName == true && 
        checkListEvents.firstPlayerSelection == true &&
        checkListEvents.secondPlayerName == false && 
        checkListEvents.secondPlayerSelection == false &&
        checkListEvents.thirdScreenShouldShowed == true
        ){
            secondScreen.style.display = 'none';
            thirdScren.style.display = 'block';
            secondPlayerData = true;
            checkListEvents.thirdScreenShouldShowed = false;
            checkListEvents.thirdScreenWasShowed = true;
        }

    if(checkListEvents.firstPlayerName == true &&
        checkListEvents.firstPlayerSelection == true &&
        checkListEvents.secondPlayerName == true &&
        checkListEvents.secondPlayerSelection == true &&
        checkListEvents.thirdScreenShouldShowed == true
        ) {
            //player2.election = "Japoneses";
            yankenpo(player1.election, player2.election)
        }

    if(checkListEvents.firstPlayerName == true &&
        checkListEvents.firstPlayerSelection == true &&
        checkListEvents.secondPlayerName == true &&
        checkListEvents.secondPlayerSelection == true &&
        checkListEvents.thirdScreenShouldShowed == false
        ) {
            secondScreen.style.display = 'none';
            thirdScren.style.display = 'block';
            readyHeadGo.style.display = 'inline-block';
            collectionPlayer.readyHeadReady.style.display = 'none';
            checkListEvents.thirdScreenShouldShowed = true;
        }
    
}


    function yankenpo(firstOption, secondOption){
    
        firstScreen.style.display = 'none';
        secondScreen.style.display = 'none';
        thirdScren.style.display = 'none';
        resultScreen.style.display = 'block';

        const player1Name = document.querySelector('#player1-result-name');
        player1Name.innerText = player1.name;

        const player1Image = document.querySelector('#player1-result-image');

//optionsImages = ["imagenes/greekArmy.jpg", "imagenes/japaneseArmy.jpeg", "imagenes/hunosArmy.jpg"];
        if(player1.election == "Griegos"){
            player1Image.src = optionsImages[0];
        } else if (player1.election == "Japoneses"){
            player1Image.src = optionsImages[1];
        } else if (player1.election == "Hunos"){
            player1Image.src = optionsImages[2];
        }

        const player2Name = document.querySelector('#player2-result-name');
        player2Name.innerText = player2.name;

        const player2Image = document.querySelector('#player2-result-image');

        if(player2.election == "Griegos"){
            player2Image.src = optionsImages[0];
        } else if (player2.election == "Japoneses"){
            player2Image.src = optionsImages[1];
        } else if (player2.election == "Hunos"){
            player2Image.src = optionsImages[2];
        }

        const combatSignboard = document.querySelector('.the-winer');
        if(
        ( firstOption === 'Hunos' && secondOption === 'Japoneses') ||
        ( firstOption === 'Japoneses' && secondOption === 'Griegos') ||
        ( firstOption === 'Griegos' && secondOption === 'Hunos')
        ) {
        combatSignboard.innerText = `¡Tú ganas ${player1.name}! los ${player1.election} están orgullosos`
        resultScreen.style.backgroundImage = "url(imagenes/background-victory.jpg)";
        //firstPlayerWin()
        } else if (
            ( firstOption === 'Japoneses' && secondOption === 'Hunos') ||
            ( firstOption === 'Griegos' && secondOption === 'Japoneses') ||
            ( firstOption === 'Hunos' && secondOption === 'Griegos') 
        ){
            if(gameMode.modeGame.value == "player"){
                combatSignboard.innerText = `¡Tú ganas ${player2.name}! los ${player2.election} están orgullosos por aplastar a tus enemigos`
                resultScreen.style.backgroundImage = "url(imagenes/background-loose.jpg)";
            } else if (gameMode.modeGame.value == "pc"){
                combatSignboard.innerText = "La máquina ha ganado."
                resultScreen.style.backgroundImage = "url(imagenes/background-machine-win.jpg)";
            }
        
        //if gamemode == PC backgrounpc
        //else human background
        } else if (firstOption === secondOption){
        //tie()
        combatSignboard.innerText = `¡Empate! Ambos han combatido honrosamente`
        resultScreen.style.backgroundImage = "url(imagenes/background-tie.jpg)"
        }
            
    }
        
        
    function restart() {
        firstScreen.style.display = 'block';
        secondScreen.style.display = 'none';
        thirdScren.style.display = 'none';
        resultScreen.style.display = 'none';

        pcDisabled();
        player2Disable();
        optionSelected.reset();
        
        checkListEvent.modeSelected = false;
        checkListEvent.firstPlayerName = false;
        checkListEvent.firstPlayerSelection = false;
        checkListEvent.thirdScreenWasShowed = false;
        checkListEvent.thirdScreenShouldShowed = false;
        checkListEvent.secondPlayerName = false;
        checkListEvent.secondPlayerSelection = false;
        checkListEvent.theResulst = false;

        player1.name = "";
        player1.election = "";
        player2.name = "";
        player2.election = "";
    }
