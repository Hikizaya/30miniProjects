const testimonials = [
  {
    name: "Spider-man",
    photoSrc: "spider-avatar.jpg",
    text: "Spider-Man is a true hero! Fast, brave, and always ready to help. He saves the city with a smile, even when the odds are against him. With him, New York is in safe hands!",
},

{
    name: "Venom",
    photoSrc: "venom-avatar.jpg",
    text: "Spider-Venom is a terrifying force of nature! Raw power, unstoppable rage, and a bite worse than his bark. He’ll protect the city—but heaven help you if you get in his way.",
},

{
    name: "Spider-woman",
    photoSrc: "spider-woman-avatar.jpg",
    text: "Spider-Woman is a fearless powerhouse—grace, brains, and venom blasts included. She swings through chaos with style, leaving villains in her wake. A hero who proves strength has no gender.",
},

];

const image = document.querySelector('img')
const textOfTestimonial = document.querySelector('.text')
const nameOfUser = document.querySelector('.username')

let index = 0

updateTestimonial()

function updateTestimonial () {
    const {name, photoSrc, text} = testimonials[index]
    image.src = photoSrc
    textOfTestimonial.innerText = text
    nameOfUser.innerText = name
    index++
    if (index === testimonials.length) {
        index = 0
    }
    setTimeout(() => {
        updateTestimonial()
    }, 8000)
}