'use strict';

    let correctNumber;
    let gameEnd;
    let chosenNumber;
    let remainingChoices;
    const chosenValues = new Set();

    init();

function init(){
    correctNumber = Math.floor(Math.random() * 51 );
    gameEnd = false;
    remainingChoices = 20;
    chosenValues.clear();
    document.getElementById("main-content").innerHTML = '<span class="number-box">?</span>';
    document.querySelector("input").value = null;
    setRemainingChoicesText(`Remaing choices: ${remainingChoices}`);
}

function checkInput(){
    
    if(!gameEnd){
        chosenNumber = document.querySelector("input").value;
        document.getElementById("showInput").innerText = chosenNumber;
        let checkNotValid = checkValidity(chosenNumber);
        if(checkNotValid){
            const elmnt = document.getElementById("guideUser");
            elmnt.innerText = checkNotValid;
            elmnt.style = "color:red";
        } else {
            setUserGuidance(chosenNumber);
            setRemainingChoicesVal();        
        }
    }    
}

function setUserGuidance(chosenNumber){

    let outputTxt;
    if(chosenNumber > correctNumber){
         outputTxt = "Please input a smaller number";
    } else if (chosenNumber < correctNumber){
        outputTxt = "Please input a bigger number";
    } else {
        outputTxt = "Congrats";
        correctGuess()
    }
    const elmnt = document.getElementById("guideUser");
    elmnt.innerText = outputTxt;
    elmnt.style = "color:black";
}

function setRemainingChoicesVal(){
    remainingChoices -= 1;
    if(remainingChoices > 0){
        setRemainingChoicesText(`Remaing choices: ${remainingChoices}`);
    } else {
        gameEnd = true;
        document.getElementById("main-content").innerHTML = 
        '<p style="font-size:22px"> You lost this game. Click Restart to start again</p>' + 
        '<button onclick="restart()">Restart</button>';
        setRemainingChoicesText("Game over! You lost the game");
    }
    
}

function restart(){
    init();
}

function setRemainingChoicesText(val){
    document.getElementById("remainingChoices").innerText = val;
}

function checkValidity(chosenNumber){
    if(chosenValues.has(chosenNumber)){
        return "You have already chosen this number! Try another one please";
    } else if(chosenNumber < 1 || chosenNumber > 50){
        return "Please insert a number between 1 and 50";
    }
    chosenValues.add(chosenNumber);
    return null; 
}

function correctGuess(){
    document.getElementsByClassName("number-box")[0].innerText = chosenNumber;
    gameEnd = true;
    document.getElementById("main-content").innerHTML = 
        '<p style="font-size:22px"> Congratulations! You won. Click Restart to start again</p>' + 
        '<button onclick="restart()">Restart</button>';
}