const closePath = "img/fechada.jpg"
const openPath = "img/aberta.jpg"
const brokenPath = "img/quebrada.jpg"

document.addEventListener("DOMContentLoaded", function() {
    const $img = document.querySelector("img")

    $img.src = closePath

    $img.addEventListener("mouseover", () => {
        $img.src = openPath
    })

    $img.addEventListener("mouseout", () => {
        $img.src = closePath
    })

    $img.addEventListener("click", () => {
        $img.src = brokenPath
    })
})