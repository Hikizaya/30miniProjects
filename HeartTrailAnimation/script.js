const bodyEl = document.querySelector('body')

bodyEl.addEventListener('mousemove', function (event) {
    const xPosition = event.offsetX
    const yPosition = event.offsetY
    const spanEl = document.createElement('span')

    spanEl.style.left = xPosition + 'px'
    spanEl.style.top = yPosition + 'px'
    bodyEl.appendChild(spanEl)

    const size = Math.random() * 100
    spanEl.style.width = size + 'px'
    spanEl.style.height = size + 'px'

    setTimeout(function () {
        spanEl.remove()
    }, 3000)
})
