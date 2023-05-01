const serverCreator = document.getElementById("createServer");

var createPanelStatus = false

serverCreator.addEventListener("click", () => {
    if (!createPanelStatus) {
        createPanelStatus = true
        document.getElementById("createServerPanel").style.display = "block"
    }
})