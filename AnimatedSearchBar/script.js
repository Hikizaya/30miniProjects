const searchBarContainer = document.querySelector('.search-bar-container')
const magnifier = document.querySelector('.magnifier')

magnifier.addEventListener('click', function() {
    searchBarContainer.classList.toggle('active')
})