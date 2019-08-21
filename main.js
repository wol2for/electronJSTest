const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const { dialog } = require("electron");
const { template } = require("./app-menu-template");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile("index.html");

  //mainWindow.webContents.openDevTools();
  mainWindow.removeMenu();

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("display-app-menu", (event, arg) => {
  const appMenu = Menu.buildFromTemplate(template);
  if (mainWindow) {
    appMenu.popup(mainWindow, arg.x, arg.y);
  }
});
