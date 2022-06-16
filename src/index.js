// write your code here

//Event listeners
const form = document.querySelector("#new-ramen")
form.addEventListener('submit', handleSubmit)

//Event handlers
function handleSubmit(e) {
  e.preventDefault()
  let ramenObj = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target.comments.value
  }
  renderOneRamenImage(ramenObj)
  form.reset()
}

//DOM manipulation functions
function renderOneRamenImage(ramen) {
  let ramenMenu = document.querySelector("#ramen-menu")
  //create image
  let image = document.createElement('div')
  image.className = 'ramen'
  image.innerHTML = `
  <img src="${ramen.image}">
  `
  //add image to DOM
  ramenMenu.appendChild(image)

  //Handles click on images
  image.querySelector('img').addEventListener('click', () => {
    let ramenDetails = document.querySelector("#ramen-detail")
    ramenDetails.innerHTML = `
    <img class="detail-image" src="${ramen.image}">
    <h2 class="name">${ramen.name}</h2>
    <h3 class="restaurant">${ramen.restaurant}</h3>
    `
    let comments = document.querySelector('#comment-display')
    comments.textContent = ramen.comment
    let rating = document.querySelector('#rating-display')
    rating.textContent = ramen.rating
  })
}





function getRamenImages() {
  fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((data) => data.forEach((ramen => renderOneRamenImage(ramen))))
}

function initializer() {
  getRamenImages()
}

initializer()
