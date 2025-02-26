// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('node:path');
var ipc = require('electron').ipcMain;

let mainWindow = null;

// App Window
function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    resizable: true,
    width: 960,
    height: 540,
    // fullscreen: true,
    // autoHideMenuBar: true,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // preload: path.join(__dirname, 'preload.js')
    },
  });

  // load the homepage of the app.
  // CHANGE THIS TO THE HOMEPAGE OF YOUR APP
  mainWindow.loadFile('./assets/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('enter-full-screen', () => {
    mainWindow.setMenuBarVisibility(false);
  });
  mainWindow.on('leave-full-screen', () => {
    mainWindow.setMenuBarVisibility(true);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('windowExitFullScreen', function (event) {
  console.log('main - exiting fullscreen');

  if (mainWindow.isFullScreen()) {
    console.log('is fullscreen');
    mainWindow.setFullScreen(false);
  } else {
    console.log('not fullscreen');
  }
});

ipc.on('windowEnterFullScreen', function (event) {
  console.log('main - going fullscreen');

  mainWindow.setFullScreen(true);
});
