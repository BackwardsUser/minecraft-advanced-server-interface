const serverCreator = document.getElementById("createServer");

var open = false;

serverCreator.addEventListener("click", () => {
    if (open) {
        open = !open;
        document.getElementById("createServerPanel").classList.remove("open");
    } else {
        open = !open;
        document.getElementById("createServerPanel").classList.add("open");
    }
})