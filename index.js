// More or less standard electron index file, create a browser window and put
// out index page in it.

var app = require('app');
var BrowserWindow = require('browser-window');

require('electron-debug')();

var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Tablespoon',
        "web-preferences": {
            "web-security": false
        }
    });

    var url = 'file://' + __dirname + '/index.html';
    mainWindow.loadUrl(url);
});
