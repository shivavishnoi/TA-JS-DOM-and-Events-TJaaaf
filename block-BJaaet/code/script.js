let form = document.querySelector(`form`)

let movies = []

function handleSubmit(e) {
  e.preventDefault()
  let movieName = e.target.elements.movieInput.value
  movies.push(movieName)
  addMovie(movieName)
  e.target.elements.movieInput.value = ``
}
form.addEventListener(`submit`, handleSubmit)


function addMovie(name) {
  let html = `<div class="moviename">${name}</div>
              <div class="close">Close</div>`
  let movieBoxElm = document.createElement(`div`)
  let close = document.querySelector(`.close`)
  close.addEventListener(`click`, (e) => {
    close.parentElement.remove()
  })
  movieBoxElm.classList.add(`moviebox`)
  movieBoxElm.innerHTML = html
  document.querySelector(`.movielist`).append(movieBoxElm)
}

// function closeElm() {
//   let close = document.querySelector(`.close`)
//   close.addEventListener(`click`, (e) => {
//     close.parentElement.remove()
//   })

// }



  //       < div class="moviebox" >
  //         <div class="moviename">Raja Hindustani</div>
  //         <div class="close">Close</div>
  //       </div >