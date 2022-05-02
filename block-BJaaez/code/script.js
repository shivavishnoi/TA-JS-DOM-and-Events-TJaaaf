let searchInput = document.querySelector(`.searchinput`)
let rootElm = document.querySelector(`ul`)

let todoList = JSON.parse(localStorage.getItem(`todos`)) || []
let activeButton = `all`

function handleText(e) {
  let text = e.target.value
  if (e.keyCode == 13 && text !== ``) {
    todoList.push({
      todo: text,
      isCompleted: false
    })
    e.target.value = ``
    createUI(todoList)
    localStorage.setItem(`todos`, JSON.stringify(todoList))
  }
}
searchInput.addEventListener(`keyup`, handleText)

function removeTodo(e) {
  let index = e.target.dataset.id
  todoList.splice(index, 1)
  createUI(todoList)
  localStorage.setItem(`todos`, JSON.stringify(todoList))
}
function handleCheck(e) {
  let id = e.target.id
  todoList[id].isCompleted = !todoList[id].isCompleted
  createUI(todoList)
  localStorage.setItem(`todos`, JSON.stringify(todoList))
}
function createUI(alltodos = []) {
  rootElm.innerHTML = ``
  alltodos.forEach((singleTodo, index) => {
    let li = document.createElement(`li`)
    let input = document.createElement(`input`)
    input.setAttribute(`type`, `checkbox`)
    input.setAttribute(`id`, index)
    let p = document.createElement(`p`)
    p.innerText = singleTodo.todo
    input.checked = singleTodo.isCompleted
    input.addEventListener(`click`, handleCheck)
    input.checked = singleTodo.isCompleted
    if (input.checked) {
      p.style.textDecoration = `line-through`
    }
    let span = document.createElement(`span`)
    span.innerText = `Close`
    span.setAttribute(`data-id`, index)
    span.addEventListener(`click`, removeTodo)
    li.append(input, p, span)
    rootElm.append(li)
  })
}

createUI(todoList)

let all = document.querySelector(`.all`)
all.addEventListener(`click`, (e) => {
  activeButton = `all`
  removeSelected()
  if (activeButton === `all`) {
    all.classList.add(`selected`)
  }
  createUI(todoList)
})

let active = document.querySelector(`.active`)
active.addEventListener(`click`, (e) => {
  let activelist = todoList.filter((todo) => !todo.isCompleted)
  activeButton = `active`
  removeSelected()
  if (activeButton === `active`) {
    active.classList.add(`selected`)
  }
  createUI(activelist)
})

let completed = document.querySelector(`.completed`)
completed.addEventListener(`click`, (e) => {
  let inactivelist = todoList.filter((todo) => todo.isCompleted)
  activeButton = `completed`
  removeSelected()
  if (activeButton === `completed`) {
    completed.classList.add(`selected`)
  }
  createUI(inactivelist)
})

let clear = document.querySelector(`.clear`)
clear.addEventListener(`click`, (e) => {
  todoList = todoList.filter((todo) => !todo.isCompleted)
  localStorage.setItem(`todos`, JSON.stringify(todoList))
  activeButton = `clear`
  removeSelected()
  if (activeButton === `clear`) {
    clear.classList.add(`selected`)
  }
  createUI(todoList)
})

function removeSelected() {
  all.classList.remove(`selected`)
  active.classList.remove(`selected`)
  completed.classList.remove(`selected`)
  clear.classList.remove(`selected`)
}