// Select ramen-menu div
const ramenMenu = document.querySelector('#ramen-menu')

// Fetch ramen data from /ramens endpoint
const baseURL = 'http://localhost:3000'

fetch(baseURL + '/ramens')
.then(resp => resp.json())
.then((ramensData) => showRamens(ramensData))

// Iterate over ramen objects and apply callback fxn to each one 

function showRamens (ramens) {
    ramens.forEach(appendRamenImage)
}

// Callback fxn that adds image tags, updates src attributes with ramen ids, appends image to ramen-menu div
// Add event listener to each image in the ramen-menu div
function appendRamenImage (ramen) {
    const img = document.createElement('img')
    img.src = ramen.image
    img.details = ramen
    img.addEventListener('click', addRamenDetails)
    ramenMenu.append(img)
} 

// Create callback function that will update the ramen-detail div
function addRamenDetails(e){
    let ramen = e.target.details
    const name = document.querySelector('.name')
    name.innerText = ramen.name
    const image = document.querySelector('.detail-image')
    image.src = ramen.image
    const restaurant = document.querySelector('.restaurant')
    restaurant.innerText = ramen.restaurant
    const rating = document.querySelector('#rating-display')
    rating.innerText = ramen.rating
    const comment = document.querySelector('#comment-display')
    comment.innerText = ramen.comment
}

// Select name, restaurant, image, rating, comment tags in ramen-detail div
// Grab appropriate data for each ramen in the ramen-detail div - where does it come from
// Update/display correct info for each ramen tag in the ramen-detail div

function addRamenDetails(e){
    let ramen = e.target.details
    const name = document.querySelector('.name')
    name.innerText = ramen.name
    const image = document.querySelector('.detail-image')
    image.src = ramen.image
    const restaurant = document.querySelector('.restaurant')
    restaurant.innerText = ramen.restaurant
    const rating = document.querySelector('#rating-display')
    rating.innerText = ramen.rating
    const comment = document.querySelector('#comment-display')
    comment.innerText = ramen.comment
}

/*Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
*/

//select form
// callback function that adds new ramen to ramen-menu div
// select form input fields
// create image and add to ramen-menu div

// Select form
// Add submit event listener to form

const ramenForm = document.querySelector('form')
ramenForm.addEventListener('submit', newRamen)

function newRamen(e) {
    e.preventDefault()
    
    // select form input fields
    const name = document.querySelector('#new-name').value
    const restaurant = document.querySelector('#new-restaurant').value
    const image = document.querySelector('#new-image').value
    const rating = document.querySelector('#new-rating').value
    const comment = document.querySelector('#new-comment').value

//create new ramen object
const ramen = {name, restaurant, image, rating, comment}

// create image and add to ramen-menu div
appendRamenImage(ramen)
}
