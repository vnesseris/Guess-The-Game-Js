'use strict';

let correctNumber = Math.floor(Math.random() * 51 );
let gameEnd = false;
let chosenNumber;
let remainingChoices = 20;
const chosenValues = new Set();
setRemainingChoicesText(`Remaing choices: ${remainingChoices}`);

function checkInput(){
    
    chosenNumber = document.querySelector("input").value;
    document.getElementById("showInput").innerText = chosenNumber;
    let checkNotValid = checkValidity(chosenNumber);
    if(checkNotValid){
        const elmnt = document.getElementById("guideUser");
        elmnt.innerText = checkNotValid;
        elmnt.style = "color:red";
    } else {
        setUserGuidance(chosenNumber);
        if(!gameEnd){
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
        //TODO handle gameover
        gameEnd = true;
        setRemainingChoicesText("Game over! You lost the game");
    }
    
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
    alert("Congratulations!! You found the number");
}