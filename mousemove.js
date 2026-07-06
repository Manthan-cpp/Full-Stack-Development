let box = document.querySelector(".box");

window.addEventListener("mousemove", function (e) {
    box.style.top = e.clientY + "px";
    box.style.left = e.clientX + "px";
});
