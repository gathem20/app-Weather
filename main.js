const { app, BrowserWindow } = require("electron");

function createwindow() {
  const win = new BrowserWindow({
    width: 768,
    height: 560,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("index.html");
}
app.whenReady().then(createwindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
