

fetch("https://api.disneyapi.dev/characters")
.then(res => res.json())
.then(characterObj => {
  const page = characterObj.nextPage
  for (i = 2; i < 150; i++) {
    fetch(`https://api.disneyapi.dev/characters?page=${i}`)
      .then(res => res.json())
      .then(page2data => {
        page2data.data.forEach(character => {
          renderListNames(character)
        })
      })

  }
  characterObj.data.forEach(character => {
    renderListNames(character)
  })
})

function renderListNames(character) {
const list = document.querySelector(`#myUL`)
const characterNames = document.createElement(`li`)

characterNames.textContent = character.name
console.log(characterNames)
characterNames.style.cursor = `pointer`

list.appendChild(characterNames)
characterNames.addEventListener(`click`, () => {

  document.querySelector(`#name`).textContent = character.name

  document.querySelector(`#image`).src = character.imageUrl

  document.querySelector(`#image`).alt = character.name

})
}

// like button variables and functions
const likeContainer = document.querySelector("#like-banner")
const likeBtn = document.querySelector("#likeBtn")
likeBtn.addEventListener("click", addLike)

function addLike(){
let likeCount = document.querySelector("like-count")
addOne = parseInt(likeCount.textContent) +1
likeCount.textContent = addOne
}
// checking