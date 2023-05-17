// Imports
const { ipcRenderer } = require("electron")

/**
 * Application Controls Handler
 * @BackwardsUser
 * @param {Element} e 
 */
function controller(e) {
    ipcRenderer.send("MASI:APPLICATION", e.id);
}

/**
 * Menu Controls Handler
 * @BackwardsUser
 * @param {Element} e 
 */
function menuOption(e) {
    switch (e.id) {
        case "closeServerCreatePanel":
            e.parentElement.style.display = "none"
    }
}