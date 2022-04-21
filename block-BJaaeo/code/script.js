let resultScreen = document.querySelector(`.result-screen`)

let handleDigitClick = (e) => {
  clear()
  resultScreen.innerText += e.target.innerText
}
document.querySelector(`.digits`).addEventListener(`click`, handleDigitClick)

let handleOperationClick = (e) => {
  clear()
  resultScreen.innerText += e.target.innerText
}
document.querySelector(`.operations`).addEventListener(`click`, handleDigitClick)

function clear() {
  document.querySelector(`.clear`).addEventListener(`click`, function () {
    resultScreen.innerText = ``
  })
}

document.querySelector(`.equals`).addEventListener(`click`, function () {
  resultScreen.innerText = eval(resultScreen.innerText)
})