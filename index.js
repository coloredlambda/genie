const electron = require('electron');

const { app, BrowserWindow, Tray } = electron;

let MainWindow, MainTray;

// Function to create main tray
const createMainTray = () => {
    console.log('Creating Main Tray');
    MainTray = new Tray('./public/logo.png');


    MainTray.on('click', () => {
        if(MainWindow.isVisible()){
            MainWindow.hide();
        }else{
            MainWindow.show();
        }
    });

};

// Function to create main window
const createMainWindow = () => {
    console.log('Loading Main Window');

    MainWindow = new BrowserWindow({
        resizable : false,
        frame : false,
        height : 700,
        width : 300,
        x : 1200,
        y : 0,
        show : false
    });

    MainWindow.loadURL('http://localhost:3000');
    console.log('Main window loaded');
};

// App logic
app.on('ready', () => {
    createMainWindow();
    createMainTray();
});