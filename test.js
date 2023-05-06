const prompt = require("prompt-sync")();

function winCheck(userScore, CPUScore){
    var winner = null
    if (userScore == 5){
        winner = "User";
    }
    else if (CPUScore == 5){
        winner = "CPU";
    }
    console.log(winner);
    return winner;
}

function roundCheck(userChoice, CPUChoice, userScore, CPUScore){
    if ((userChoice == 'rock' && CPUChoice == 'scissor') || (userChoice == 'scissor' && CPUChoice == 'paper') || (userChoice == 'paper' && CPUChoice == 'rock')){
        userScore++;
    }
    else if ((userChoice == 'rock' && CPUChoice == 'paper') || (userChoice == 'scissor' && CPUChoice == 'rock') ||(userChoice == 'paper' && CPUChoice == 'scissor')){
        CPUScore++
    }
    const score = [userScore, CPUScore];
    return score;

}

function game(){
    const RPS = ["rock", "paper", "scissor"];
    let canChoose = true;
    let userScore = 0;
    let CPUScore = 0;

    while (winCheck(userScore, CPUScore) == null){
        var CPUChoice = RPS[Math.floor(Math.random()*RPS.length)];
        let userChoice = prompt("Enter your choice: ");   

        const score = roundCheck(userChoice, CPUChoice, userScore, CPUScore);
        userScore = score[0];
        CPUScore = score[1];
        console.log(userChoice, CPUChoice);
        console.log(userScore, CPUScore);
    }
}

game()