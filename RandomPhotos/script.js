const imageContainer = document.querySelector('.image-container')
const button = document.querySelector('.btn')

button.addEventListener('click', function () {
    imageNumber = 3
    addNewImages()
})

function addNewImages () {
    for (let index = 0; index < imageNumber; index++) {
        const newImage = document.createElement('img')
        newImage.src =  `https://random.imagecdn.app/300/300?random=${Math.floor(Math.random() * 2000)}`
        imageContainer.appendChild(newImage)
    }
}