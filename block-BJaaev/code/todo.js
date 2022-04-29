let input = document.querySelector(`#todobox`)
let rootElm = document.querySelector(`ul`)

let allTodos = JSON.parse(localStorage.getItem(`todos`)) || []


function handleSubmit(e) {
  if (e.keyCode == 13 && e.target.value !== ``) {
    allTodos.push({
      todo: e.target.value,
      isCompleted: false
    })
    createUI(allTodos, rootElm)
    e.target.value = ``
  }
  localStorage.setItem("todos", JSON.stringify(allTodos))
}



function deleteTodo(e) {
  let id = e.target.dataset.id
  allTodos.splice(id, 1)
  localStorage.setItem("todos", JSON.stringify(allTodos))
  createUI(allTodos, rootElm)
}

function handleCheck(e) {
  let id = e.target.id
  allTodos[id].isCompleted = !allTodos[id].isCompleted
  localStorage.setItem("todos", JSON.stringify(allTodos))
  createUI(allTodos, rootElm)
}

function createUI(data, root) {
  root.innerHTML = ``
  data.forEach((singleTodo, index) => {
    let li = document.createElement(`li`)
    let checkbox = document.createElement(`input`)
    checkbox.type = `checkbox`
    checkbox.id = index
    checkbox.checked = singleTodo.isCompleted
    checkbox.addEventListener(`input`, handleCheck)
    let label = document.createElement(`label`)
    label.setAttribute(`for`, index)
    label.innerText = singleTodo.todo
    if (checkbox.checked) {
      label.style.textDecoration = `line-through`
    }
    let span = document.createElement(`span`)
    span.innerText = `Close`
    span.setAttribute(`data-id`, index)
    span.addEventListener(`click`, deleteTodo)
    li.append(checkbox, label, span)
    root.append(li)
  })
}

createUI(allTodos, rootElm)

input.addEventListener(`keyup`, handleSubmit)