const { app, BrowserWindow } = require('electron');
const { join } = require("node:path");

let MainWindow;

app.once("ready", () => {
    MainWindow = new BrowserWindow({
        center: true,
        closable: true,
        focusable: true,
        frame: false,
        fullscreenable: true,
        height: 600,
        maximizable: true,
        minimizable: true,
        movable: true,
        resizable: true,
        title: "MASI",
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        },
        width: 1200
    });

    MainWindow.once("closed", () => {
        app.quit();
        process.exit();
    })

    MainWindow.loadFile(join(__dirname, "view", "html", "main.html"));
});