

fetch("https://api.disneyapi.dev/characters")
.then(res => res.json())
.then(characterObj => {
  const page = characterObj.nextPage
  for (i = 2; i < 150; i++){
    fetch(`https://api.disneyapi.dev/characters?page=${i}`)
    .then(res => res.json())
    .then(page2data => {
      page2data.data.forEach(character => {
        renderCharacters(character)
      })
    })

  }
  characterObj.data.forEach(character => {
    renderCharacters(character)
  })
})

function renderCharacters(character) {

const characterBar = document.querySelector(`#character-bar`)

const images = document.createElement(`img`)

images.src = character.imageUrl
images.style.width = `10vw`
images.style.height = `10vh`
images.style.cursor = `pointer`

characterBar.appendChild(images)

images.addEventListener(`click`,()=>{

  document.querySelector(`#name`).textContent= character.name

  document.querySelector(`#image`).src = character.imageUrl
  
  document.querySelector(`#image`).alt = character.name
  
})
}

// checking