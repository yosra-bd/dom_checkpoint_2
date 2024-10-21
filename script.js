
function getrandomcolors() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}
document.addEventListener("DOMContentLoaded", (event) => {
    box = document.getElementById("color-box");
    btn = document.getElementById("change-color-btn")

    btn.addEventListener("click",function () {
    box.style.backgroundColor = getrandomcolors()
    
})
});


