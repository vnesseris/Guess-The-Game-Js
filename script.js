'use strict';

let correctNumber = Math.floor(Math.random() * 51 );
console.log(correctNumber);

let chosenNumber;
let remainingChoices = 20;

function checkInput(){
    
    chosenNumber = document.querySelector("input").value
    console.log(chosenNumber);
    document.getElementById("showInput").innerHTML = "Your guess is: " + chosenNumber;
    setUserGuidance(chosenNumber);
    
}

function setUserGuidance(chosenNumber){

    let outputTxt;
    if(chosenNumber > correctNumber){
         outputTxt = "Please input a smaller number";
    } else if (chosenNumber < correctNumber){
        outputTxt = "Please input a bigger number";
    } else {
        outputTxt = "Congrats";
    }
    document.getElementById("guideUser").innerText = outputTxt;
}