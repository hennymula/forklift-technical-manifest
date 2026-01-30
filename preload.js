// Preload script for secure communication between renderer and main process
const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
    savePMReport: (pdfData, fileName) => ipcRenderer.invoke('save-pm-report', pdfData, fileName)
});
