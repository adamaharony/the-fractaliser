/*
 *  		 Made by Adam Aharony
 *           All rights reserved
 */


 const { app, BrowserWindow } = require("electron");
 const path = require("path");
 const url = require("url");

 let window;


 const createWindow = () => {
     window = new BrowserWindow({width: 1440, height: 900});
		 const loadPath = {
         pathname: path.join(__dirname, "assets/app.ejs"),
         protocol: "file:",
         slashes: true
     };

     window.loadURL(url.format(loadPath));

     // ONLY FOR DEV TOOLS
     // window.webContents.openDevTools();

     window.on("closed", () => {
         window = null;
     });
 }


// Let the callbacks begin!
app.on("ready", createWindow);


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
