const { app, BrowserWindow, ipcMain } = require('electron');
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
        width: 1200,
        icon: join(__dirname, "assets", "icons", "bakies.ico")
    });

    MainWindow.once("closed", () => {
        app.quit();
        process.exit();
    })

    MainWindow.loadFile(join(__dirname, "views", "main", "html", "main.html"));
});

ipcMain.on("MASI:APPLICATION", (e, data) => {
    if (data == "close") {
        console.clear();
        MainWindow.close();
        app.quit();
        process.exit();
    } else if (data == "min") {
        MainWindow.minimize();
    } else if (data == "max") {
        if (MainWindow.isMaximized()) {
            MainWindow.unmaximize();
        } else {
            MainWindow.maximize();
        }
    } else {
        console.error(`Unknown "${data}".`)
    }
})