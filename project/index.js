

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

const likesArr = [];

function renderListNames(character) {
const list = document.querySelector(`#myUL`)
const characterNames = document.createElement(`li`)


const likeObj = {name: character.name, likes: 0}
likesArr.push(likeObj)

characterNames.textContent = character.name
console.log(characterNames)
characterNames.style.cursor = `pointer`

list.appendChild(characterNames)
characterNames.addEventListener(`click`, () => {

  const likeRec = likesArr.find(like => like.name === character.name)
  document.querySelector("#like-count").textContent = likeRec.likes

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
let likeCount = document.querySelector("#like-count")
addOne = parseInt(likeCount.textContent) +1
likeCount.textContent = addOne
}
// checking




// testing out search

function search() {
  // Declare variables

  const input = document.querySelector('#myInput');
  const filter = input.value.toUpperCase();
  const ul = document.querySelector("#myUL");
  const li = ul.getElementsByTagName('li');
  

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    // a = li[i].getElementsByTagName("a")[0];
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
