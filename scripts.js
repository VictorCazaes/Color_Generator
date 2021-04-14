const body = document.querySelector("body")
body.onkeydown = function (key) {
    if (key.keyCode == 32) {
        generate()
    } else {
        return
    }
}
function generate() {
    const root = document.documentElement;
    const hexDisplay = document.querySelector("#hex-display")
    const maxHex = parseInt("ffffff", 16)
    const randomNumber = Math.random()
    const result = Math.floor(randomNumber * maxHex)
    const hex = "#" + result.toString(16)
    root.style.setProperty("--color", hex)
    hexDisplay.innerHTML = hex
}