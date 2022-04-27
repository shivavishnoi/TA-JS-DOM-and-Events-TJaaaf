let input = document.querySelector(`input[type="text"]`)
let rootElm = document.querySelector(`.movielist`)

let allMovies = [
  {
    name: `Forest Gump`,
    watched: false
  },
  {
    name: `The Green Mile`,
    watched: true
  }
]

input.addEventListener(`keyup`, (e) => {
  // adding a movie
  if (e.keyCode === 13) {
    allMovies.push({
      name: e.target.value,
      watched: false,
    })
    e.target.value = ``
    createMovieUI()
  }
})

function deleteMovie(e) {
  let id = e.target.dataset.id
  allMovies.splice(id, 1)
  createMovieUI()
}

function handleChange(e) {
  let id = e.target.id
  allMovies[id].watched = !allMovies[id].watched
}

function createMovieUI() {
  rootElm.innerHTML = ``
  allMovies.forEach((movie, index) => {
    let div = document.createElement(`div`)
    div.classList.add(`movieBox`)
    let input = document.createElement(`input`)
    input.type = `checkbox`;
    input.setAttribute(`id`, index)
    input.checked = movie.watched
    input.addEventListener(`click`, handleChange)
    let label = document.createElement(`label`)
    label.setAttribute(`for`, index)
    label.innerText = `${movie.name}`
    let span = document.createElement(`span`)
    span.innerText = `Close`
    span.addEventListener(`click`, deleteMovie)
    span.setAttribute(`data-id`, index)
    div.append(input, label, span)
    rootElm.append(div)
  })
}

createMovieUI()