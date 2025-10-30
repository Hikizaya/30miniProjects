const textArea = document.querySelector('#textarea')
const totalCounter = document.querySelector('#total-counter')
const remainingCounter = document.querySelector('#remaining-counter')

textArea.addEventListener('keydown', function() {
    updateCounter()
})

function updateCounter() {
    totalCounter.innerText = textArea.value.length
    remainingCounter.innerText = textArea.getAttribute('maxLength') - textArea.value.length
}