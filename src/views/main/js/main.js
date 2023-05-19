
/**
 * @param {Element} elem 
 */
function appIconFailure(elem) {
    var alt = document.createElement("p");
    alt.innerText = "MASI"
    elem.parentNode.insertBefore(alt, elem);
    elem.parentNode.removeChild(elem);
}

document.addEventListener("keypress", (e) => {
    if (e.key.toLowerCase() !== "enter") return;
    const activeElement = document.activeElement.id;
    switch (activeElement) {
        case "createServer":
            togglePanel();
            break;
    }
})