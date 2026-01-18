const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      webSecurity: true,
    },
    backgroundColor: '#0a0a0a',
    title: 'TubeNotes',
    icon: path.join(__dirname, 'public', 'icon-512x512.png'),
    autoHideMenuBar: true,
    show: false,
  });

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Development modunda localhost'u, production'da static dosyaları yükle
  if (isDev) {
    console.log('Development mode - Loading URL: http://localhost:3000');
    
    // Open DevTools in development
    mainWindow.webContents.openDevTools();
    
    mainWindow.loadURL('http://localhost:3000').then(() => {
      console.log('LoadURL successful');
    }).catch(err => {
      console.error('LoadURL error:', err);
    });
  } else {
    // Production mode - load from resources
    console.log('Production mode - Loading from file system');
    console.log('__dirname:', __dirname);
    
    // Try different possible paths for the built app
    const possiblePaths = [
      path.join(__dirname, 'out', 'index.html'),
      path.join(process.resourcesPath, 'app.asar', 'out', 'index.html'),
      path.join(process.resourcesPath, 'out', 'index.html'),
    ];
    
    let indexPath = null;
    for (const p of possiblePaths) {
      console.log('Checking path:', p);
      if (fs.existsSync(p)) {
        indexPath = p;
        console.log('Found index.html at:', indexPath);
        break;
      }
    }
    
    if (indexPath) {
      mainWindow.loadFile(indexPath).then(() => {
        console.log('File loaded successfully');
      }).catch(err => {
        console.error('Failed to load file:', err);
      });
    } else {
      console.error('Could not find index.html in any expected location');
      console.error('Searched paths:', possiblePaths);
    }
  }

  // Debug: Log console messages from renderer
  mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log(`Renderer: ${message}`);
  });

  // Pencere kapatıldığında
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Electron hazır olduğunda pencereyi oluştur
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Tüm pencereler kapatıldığında uygulamadan çık (macOS hariç)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Güvenlik: External linkleri varsayılan tarayıcıda aç
app.on('web-contents-created', (event, contents) => {
  contents.setWindowOpenHandler(({ url }) => {
    // YouTube linklerini tarayıcıda aç
    if (url.startsWith('https://www.youtube.com') || url.startsWith('https://youtu.be')) {
      require('electron').shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
});
