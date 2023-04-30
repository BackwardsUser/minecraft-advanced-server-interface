// Imports
const {ipcRenderer } = require("electron")

/**
 * Application Controls Handler
 * @BackwardsUser
 * @param {Element} e 
 */
function controller(e) {
    ipcRenderer.send("MASI:APPLICATION", e.id);
}