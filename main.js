const path = require('path');
const {app, BrowserWindow, ipcMain} = require('electron');


function CreateMainWindow(){
    const mainWindow = new BrowserWindow({
        title: "RPS",
        width: 1920/2,
        height: 1080/2,
    });
    mainWindow.loadFile(path.join(__dirname, '/renderer/index.html'));
    mainWindow.maximize();
    //mainWindow.webContents.openDevTools()
}


app.whenReady().then(() => {
    CreateMainWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  
