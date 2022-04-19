// without Delegation
let withoutDel = Array.from(document.querySelectorAll(`.box`)).slice(0, 12)

withoutDel.forEach((box, index) => {
  box.addEventListener(`click`, function () {
    fillValue(box, index)
  })
})

let fillValue = (box, indextofill) => {
  box.innerText = indextofill + 1
  setTimeout(function () {
    clearValue(box)
  }, 1000)
}
let clearValue = (boxClear) => {
  boxClear.innerText = ``
}

// with delegation
// moment is an abbreviation for event
let withDel = Array.from(document.querySelectorAll(`.box`)).slice(12)
let root = document.querySelectorAll(`.boxes`)[1]

withDel.forEach((element, index) => {
  element.setAttribute(`data-num`, index + 1)
})

let handleEvent = (moment) => {
  moment.target.innerText = moment.target.dataset.num
  setTimeout(function () {
    clearValue(moment.target)
  }, 1000)
}
root.addEventListener(`click`, handleEvent)