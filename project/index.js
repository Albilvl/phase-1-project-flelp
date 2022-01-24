fetch("https://api.disneyapi.dev/characters")
  .then(res => res.json())
  .then(characterObj => {
    characterObj.data.forEach(character => {
      renderCharacters(character)
    })
  })

function renderCharacters(character) {

  const characterBar = document.querySelector(`#character-bar`)

  const images = document.createElement(`img`)

  images.src = character.imageUrl
  images.style.cursor = `pointer`

  characterBar.appendChild(images)

  images.addEventListener(`click`,()=>{

    document.querySelector(`#name`).textContent= character.name

    document.querySelector(`#image`).src = character.imageUrl
    
    document.querySelector(`#image`).alt = character.name
    
  })
}

// checking