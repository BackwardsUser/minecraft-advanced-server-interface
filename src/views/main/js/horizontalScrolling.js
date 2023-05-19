const scrollContainer = document.getElementById("H-Scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    scrollContainer.scrollLeft += evt.deltaY;
});