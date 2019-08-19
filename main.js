const { app, BrowserWindow } = require("electron");
const { dialog } = require("electron");

function createWindow() {
  // Создаем окно браузера.
  let win = new BrowserWindow({
    width: 1600,
    height: 800,

    webPreferences: {
      nodeIntegration: true
    }
  });

  //win.removeMenu();
  //dialog.showMessageBoxSync(win, { type: "error", title: "Title!!", detail: "msg body" });
  win.webContents.openDevTools();
  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
