let form = document.querySelector(`form`)
let error = ``

let handleSubmit = (e) => {
  e.preventDefault()
  validateUsername(e)
  validateName(e)
  validateEmail(e)
  validateContact(e)
  passwordMatch(e)
  success()
}

form.addEventListener(`submit`, handleSubmit)

function validateUsername(e) {
  let usernameElm = e.target.elements.username
  if (usernameElm.value.length <= 4 || usernameElm.value == ``) {
    error = `Username Can't be less than 4 characters`
    usernameElm.nextElementSibling.innerText = error
    usernameElm.classList.add(`error`)
  }
  else {
    usernameElm.classList.remove(`error`)
    usernameElm.classList.add(`success`)
  }
}

let containsNum = (value) => {
  return value.split('').some(e => Number(e));
}

function validateName(e) {
  let name = e.target.elements.name
  if (containsNum(name.value) || name.value == '') {
    error = `Name can't be empty or have numbers`
    name.nextElementSibling.innerText = error
    name.classList.add(`error`)
  }
  else {
    name.classList.remove(`error`)
    name.classList.add(`success`)
  }
}

function validateEmail(e) {
  let email = e.target.elements.email
  if (!email.value.includes('@') || email.value.length <= 6 || email.value == '') {
    error = `Please enter correct email`
    email.nextElementSibling.innerText = error
    email.classList.add(`error`)
  }
  else {
    email.classList.remove(`error`)
    email.classList.add(`success`)
  }
}

let containsNum1 = (value) => {
  return value.split('').every(e => Number(e));
}

function validateContact(e) {
  let phone = e.target.elements.phone
  if (containsNum1(phone.value) && phone.value.length > 7) {
    phone.classList.add(`success`)
  }
  else {
    error = `Enter valid phone num`
    phone.nextElementSibling.innerText = error
    phone.classList.remove(`success`)
    phone.classList.add(`error`)
  }
}

function passwordMatch(e) {
  let pass = e.target.elements.password
  let confirmP = e.target.elements.confirmP
  if (pass.value == confirmP.value && pass.value != '' && pass.value.length > 5) {
    pass.classList.add('success')
    confirmP.classList.add('success')
  }
  else {
    error = `Password did not match or length is too short`
    confirmP.nextElementSibling.innerText = error
    pass.classList.remove('success')
    confirmP.classList.remove('success')
    pass.classList.add('error')
    confirmP.classList.add('error')
  }
}

function success() {
  let inputs = document.querySelectorAll(`input`)
  if (Array.from(inputs).every((e) => e.classList.contains(`success`))) {
    alert(`Form submitted successfully`)
  }
  else {
    // alert(`Form not submitted successfully`)
  }
}