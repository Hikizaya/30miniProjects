const container = document.querySelector('.container')

for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement('div')
    colorContainer.classList.add('color-container')
    container.appendChild(colorContainer)
}

const colorContainers = document.querySelectorAll('.color-container')

generateColors()

function generateColors() {
    colorContainers.forEach((colorContainer) => {
        const newColorCode = randomColor()
        colorContainer.style.backgroundColor = "#" + newColorCode
        colorContainer.innerText = "#" + newColorCode
    })
}

function randomColor() {
    const chars = '01234567890abcdef'
    const colorCodeLength = 6
    let colorCode = ''

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNumber, randomNumber + 1)
    }
    return colorCode
}


