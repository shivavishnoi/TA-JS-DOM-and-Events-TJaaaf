let form = document.querySelector(`form`)
let userInfo = {}

let handleSubmit = (e) => {
  e.preventDefault()
  console.dir(form)
  userInfo.name = form.elements.name.value
  userInfo.email = form.elements.emailInfo.value
  userInfo.movie = form.elements.movieInfo.value
  userInfo.color = form.elements.color.value
  userInfo.inception = form.elements.inception.value
  userInfo.genre = form.elements.drone.value
  userInfo.terms = form.elements.terms.checked
  modal()
}
form.addEventListener(`submit`, handleSubmit)



function modal() {
  let modalHtml = `<h1>Hello ${userInfo.name}</h1>
 <p>Email: ${userInfo.email}</p>
 <p>You Love ${userInfo.movie}</p>
 <p>Color ${userInfo.color}</p>
 <p>Rating ${userInfo.inception}<\p>
 <p>Genre ${userInfo.genre}</p>
 <p>You ${userInfo.terms ? 'agreed' : 'did not agreed'} to our terms<\p>
 <a href = "">close</a>`
  form.innerHTML = modalHtml
}
