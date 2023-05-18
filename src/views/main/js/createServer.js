const serverCreator = document.getElementById("createServer");

var open = false;

function togglePanel() {
    var serverPanel = document.getElementById("createServerPanel");
    if (open) {
        open = false;
        serverPanel.classList.remove("open");
        document.getElementById("servername").tabIndex = -1
        document.getElementById("port").tabIndex = -1
        document.getElementById("versions").tabIndex = -1
    } else {
        open = true;
        serverPanel.classList.add("open");
        document.getElementById("servername").tabIndex = 5
        document.getElementById("port").tabIndex = 6
        document.getElementById("versions").tabIndex = 7
    }
}

serverCreator.addEventListener("click", () => {
    togglePanel()
});