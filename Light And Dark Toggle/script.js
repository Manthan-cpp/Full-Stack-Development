let mainbody = document.getElementById("pageBody")
let btn = document.getElementById("toggleBtn")
isDark = false;
function toggle() {
    if (!isDark) {
        mainbody.style.backgroundColor = "black";
        isDark = true;
        btn.innerText="Light Theme";
    }
    else {
        mainbody.style.backgroundColor = "white";
        isDark = false;
        btn.innerText="Dark Theme";
    }
}