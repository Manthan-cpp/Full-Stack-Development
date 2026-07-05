let inp = document.getElementById("keyboard")
let kpressed = document.getElementById("key-pressed")
let kcode = document.getElementById("text")
let ktext = document.getElementById("key-text")
let ans = document.getElementById("ans")
inp.addEventListener('keyup', (a) => {
    ktext.innerText = a.key;
    ans.innerText=a.keyCode;
})