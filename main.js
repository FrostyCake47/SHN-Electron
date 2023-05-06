const path = require('path');
const {app, BrowserWindow, ipcMain} = require('electron');


function CreateMainWindow(){
    const mainWindow = new BrowserWindow({
        title: "RPS",
        width: 1920/2,
        height: 1080/2,
    });
    mainWindow.loadFile(path.join(__dirname, '/renderer/index.html'));
}

ipcMain.on('rock', function(){
    console.log('ffs sake');
})

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

function roundCheck(userChoice, CPUChoice){
    
}

function game(){
    const RPS = ["Rock", "Paper", "Scissor"];
    let canChoose = true;
    let userScore = 0;
    let CPUScore = 0;

    while (winCheck(userScore, CPUScore) == null){
        var CPUChoice = RPS[Math.floor(Math.random()*RPS.length)];
        var userChoice = prompt("Enter your choice: ");
        
        roundCheck(userChoice, CPUChoice);

    }
    


}


app.whenReady().then(() => {
    CreateMainWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    game();

})
