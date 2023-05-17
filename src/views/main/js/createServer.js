const serverCreator = document.getElementById("createServer");

serverCreator.addEventListener("click", () => {
    if (document.getElementById("createServerPanel").style.display == "block") {
        document.getElementById("createServerPanel").style.display = "";
    } else {
        document.getElementById("createServerPanel").style.display = "block"
    }
})