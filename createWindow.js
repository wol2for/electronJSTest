import { BrowserWindow } from "electron";
export function createWindow() {
  // Создаем окно браузера.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  //dialog.showMessageBoxSync(win, { type: "error", title: "Title!!", detail: "msg body" });
  win.loadFile("index.html");
  win.on("closed", () => {
    win = null;
  });
}
