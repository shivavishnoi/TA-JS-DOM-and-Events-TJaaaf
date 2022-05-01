let rootElm = document.querySelector(`.game`)

// array concat and random
let gameGrid = cardsArray.concat(cardsArray)
gameGrid.sort(() => 0.5 - Math.random())

// create ui
function createUI(array) {
  array.forEach(card => {
    let div = document.createElement(`div`)
    div.classList.add(`card`)
    div.setAttribute(`data-name`, card.name)
    div.style.backgroundImage = `url(${card.img})`
    rootElm.append(div)
  });
}

createUI(gameGrid)


// applying selected/ match class
let firstguess = ''
let secondguess = ''
let count = 0;
let previousTarget = null
let delay = 1200
// couldn't avoid two clicck on same event
rootElm.addEventListener(`click`, (e) => {
  let clicked = e.target
  if (e.target.nodeName !== `SECTION`) {
    if (count < 2) {
      count++
      if (count === 1) {
        firstguess = clicked.dataset.name
        clicked.classList.add(`selected`)
      }
      else {
        secondguess = clicked.dataset.name
        clicked.classList.add(`selected`)
      }
      if (firstguess != "" && secondguess != "") {
        if (firstguess === secondguess) {
          match()
          setInterval(resetGuesses, delay)
        } else {
          setInterval(resetGuesses, delay)
        }
      }
    }

  }
})

let match = () => {
  let selected = document.querySelectorAll(`.selected`)
  selected.forEach((card) => {
    card.classList.add(`match`)
  })
}

function resetGuesses() {
  count = 0
  firstguess = ``
  secondguess = ``

  document.querySelectorAll(`.selected`).forEach((card) => {
    card.classList.remove(`selected`)
  })
}
