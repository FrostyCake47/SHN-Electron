const electron = require("electron")
const ipc = electron.ipcRenderer


const rock = document.getElementsByClassName('rock')

rock.addEventListener('click', function(){
    ipc.send('rock')
})

