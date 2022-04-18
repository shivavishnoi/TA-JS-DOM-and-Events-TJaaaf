let boxes = document.querySelector(`.boxes`)
for (let i = 0; i < 500; i++) {
  let box = document.createElement(`div`)
  box.classList.add(`box`)
  boxes.append(box)
}
let boxList = Array.from(document.querySelectorAll(`.box`))

let assignRandom = () => {
  boxList.forEach((singleBox) => {
    singleBox.innerText = Math.floor(Math.random() * 500)
    let color = `#`
    color += Math.random().toString(16).slice(2, 8)
    singleBox.style.backgroundColor = color
  })
}

document.querySelector(`.boxes`).addEventListener(`mousemove`, assignRandom)