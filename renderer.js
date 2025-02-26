const ipc = require('electron').ipcRenderer;

// Enter Fullscreen
const buttonEnterFullScreen = document.querySelector('#buttonEnterFullScreen');

buttonEnterFullScreen.addEventListener('click', function (event) {
  console.log('render - entering fullscreen');
  // openFullscreen()
  ipc.send('windowEnterFullScreen');
});

// Exit Fullscreen
const buttonExitFullScreen = document.querySelector('#buttonExitFullScreen');

buttonExitFullScreen.addEventListener('click', function (event) {
  console.log('render - exiting fullscreen');
  // closeFullscreen()

  ipc.send('windowExitFullScreen');
});

// Close Window
const buttonCloseApp = document.querySelector('#buttonCloseApp');

buttonCloseApp.addEventListener('click', () => window.close());

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  elem.requestFullscreen();
}

/* Close fullscreen */
function closeFullscreen() {
  document.exitFullscreen();
}
