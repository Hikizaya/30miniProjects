const button = document.querySelector('.btn')

button.addEventListener('mouseover', function (event) {
    const xPosition = event.pageX - button.offsetLeft
    const yPosition = event.pageY - button.offsetTop

    button.style.setProperty('--xPosition', xPosition + 'px')
    button.style.setProperty('--yPosition', yPosition + 'px')
})