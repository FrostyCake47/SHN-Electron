const path = require('path');
const {app, BrowserWindow} = require('electron');

function CreateMainWindow(){
    const mainWindow = new BrowserWindow({
        title: "RPS",
        width: 1920/2,
        height: 1080/2,
    });
    mainWindow.loadFile(path.join(__dirname, '/renderer/index.html'));
}

app.whenReady().then(() => {
    CreateMainWindow();
})
