const imageContainer = document.querySelector('.image-container')
const leftButton = document.querySelector('#prev')
const rightButton = document.querySelector('#next')

let x = 0
let timer

leftButton.addEventListener('click', function() {
    x += 45
    clearTimeout(timer)
    updateGallery()
})

rightButton.addEventListener('click', function() {
    x -= 45
    clearTimeout(timer)
    updateGallery()
})

function updateGallery() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`

    timer = setTimeout(() => {
        x -= 45
        updateGallery()
    }, 3000)

}

updateGallery()