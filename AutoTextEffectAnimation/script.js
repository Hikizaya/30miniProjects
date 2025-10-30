const containerEl = document.querySelector('.container')
const youkai = ['Kitsune', 'Tengu', 'Bakeneko', 'Inugami']

let youkaiIndex = 0

let characterIndex = 0

updateText()

function updateText () {
    characterIndex++
    containerEl.innerHTML = `
<h1>I am ${youkai[youkaiIndex].slice(0, 1) === 'I' ? 'an' : 'a'}  ${youkai[youkaiIndex].slice(0, characterIndex)}</h1>
`

if (characterIndex === youkai[youkaiIndex].length) {
    youkaiIndex++
    characterIndex = 0
}

if (youkaiIndex === youkai.length) {
    youkaiIndex = 0
}
setTimeout(updateText, 400)
}