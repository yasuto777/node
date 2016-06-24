const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// mainWindow initialization
let mainWindow;

app.on('window-all-closed',function(){
	if(process.platform != 'darwin'){
		app.quit();
	}
});

app.on('ready',function(){
	mainWindow = new BrowserWindow({
		width:1000,
		height:600
	});
	mainWindow.loadURL("http://qiita.com/");
	mainWindow.setTitle("riita");

	mainWindow.on('closed',function(){
		mainWindow = null;
	});
});
