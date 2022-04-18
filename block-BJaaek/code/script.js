document.querySelector(`.first`).addEventListener('click', () => {
  let color = '#'
  color += Math.random().toString(16).slice(2, 8)
  document.querySelector(`.first`).style.backgroundColor = color
})
document.querySelector(`.second`).addEventListener(`mousemove`, () => {
  let color = '#'
  color += Math.random().toString(16).slice(2, 8)
  document.querySelector(`.second`).style.backgroundColor = color
})