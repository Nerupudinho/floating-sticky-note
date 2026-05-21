const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let win;
const positionFile = path.join(app.getPath('userData'), 'window-position.json');

// Load saved window position
function loadWindowPosition() {
  try {
    if (fs.existsSync(positionFile)) {
      const data = fs.readFileSync(positionFile, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading window position:', error);
  }
  return { x: 100, y: 100, width: 300, height: 200 };
}

// Save window position
function saveWindowPosition() {
  if (win) {
    const bounds = win.getBounds();
    const position = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height
    };
    try {
      fs.writeFileSync(positionFile, JSON.stringify(position, null, 2));
    } catch (error) {
      console.error('Error saving window position:', error);
    }
  }
}

app.whenReady().then(() => {
  const savedPosition = loadWindowPosition();
  
  win = new BrowserWindow({
    width: savedPosition.width,
    height: savedPosition.height,
    x: savedPosition.x,
    y: savedPosition.y,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    resizable: true,
    skipTaskbar: true, // Don't show in taskbar
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');

  // Handle close window message from renderer
  ipcMain.on('close-window', () => {
    if (win) {
      win.close();
    }
  });

  // Save position when window is moved or resized
  win.on('moved', saveWindowPosition);
  win.on('resized', saveWindowPosition);

  // Save position before closing
  win.on('close', () => {
    saveWindowPosition();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

