// Variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");
const playAgain = document.getElementById("play-again");

let userDisplay = document.getElementById("user");
let botDisplay = document.getElementById("bot");
let userScoreDisplay = document.getElementById("player-score");
let botScoreDisplay = document.getElementById("bot-score");

const rockImage = "assets/stone.png";
const paperImage = "assets/paper.png";
const scissorImage = "assets/scissors.png";
const rockBotImage = "assets/stone_bot.png";
const paperBotImage = "assets/paper_bot.png";
const scissorBotImage = "assets/scissors_bot.png";

let WinnerText = document.getElementById("winner-text");

let userScore = 0;
let botScore = 0;

let gameOver = 0;

rock.addEventListener("click", () => {
    userDisplay.innerHTML = `<img src="${rockImage}">`;
    updateScore(0);
})

paper.addEventListener("click", () => {
    userDisplay.innerHTML = `<img src="${paperImage}">`;
    updateScore(1);
})

scissor.addEventListener("click", () => {
    userDisplay.innerHTML = `<img src="${scissorImage}">`;
    updateScore(2);
})

const precedenceWin = (user, bot) => {
    if (user === bot) {
        return "none";
    }

    else if (user > bot || user == 0 && bot == 2) {
        return "user";
    }

    else {
        return "bot";
    }
}

const updateBot = (botInput) => {
    if (botInput === 0) {
        botDisplay.innerHTML = `<img src="${rockBotImage}">`
    }

    else if (botInput === 1) {
        botDisplay.innerHTML = `<img src="${paperBotImage}">`
    }

    else if (botInput === 2) {
        botDisplay.innerHTML = `<img src="${scissorBotImage}">`
    }
}

const checkWinner = () => {
    if (userScore == 5) {
        WinnerText.innerHTML = "You are the winner!";
        stopGame()
    }

    else if (botScore == 5) {
        WinnerText.innerHTML = "You lost! Bot won";
        stopGame()
    }
}

const stopGame = () => {
    playAgain.style.display = 'block';
    gameOver = 1;
}

playAgain.addEventListener("click", () => {
    playAgain.style.display = 'none';
    gameOver = 0;
    userScore = 0;
    botScore = 0;
    userScoreDisplay.innerHTML = userScore;
    botScoreDisplay.innerHTML = botScore;
    WinnerText.innerHTML = "Keep playing!";
})

const updateScore = (userInput) => {
    if (gameOver === 0) {
        const botInput = Math.floor(Math.random()*3);
        updateBot(botInput);

        console.log("User inputted " + userInput);
        console.log("Bot inputted " + botInput);
        
        const winner = precedenceWin(userInput, botInput);

        console.log("winner is " + winner);

        if (winner === "user") {
            userScore++;
            userScoreDisplay.innerHTML = userScore;
        }

        else if (winner === "bot") {
            botScore++;
            botScoreDisplay.innerHTML = botScore;
        }

        console.log(userScore, botScore);
        checkWinner();
    }
}
