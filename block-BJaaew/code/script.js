let buttonRoot = document.querySelector(`.tagbuttons`)
let tabRoot = document.querySelector(`ul`)

let allPeoples = []
got.houses.forEach((house) => {
  house.people.forEach((person) => {
    allPeoples.push(person)
  })
})

// input search
let filteredPeople = [];
let input = document.querySelector(`input`)

function handleKeys(e) {
  allPeoples.forEach((person) => {
    if (person.name.toLowerCase().includes(e.target.value)) {
      filteredPeople.push(person)
    }
  })

}
input.addEventListener(`keyup`, handleKeys)

// button events
got.houses.forEach((house) => {
  let button = document.createElement(`button`)
  button.innerText = house.name
  button.setAttribute(`data-id`, house.name)
  // button.addEventListener(`click`, handleButton)
  buttonRoot.append(button)
})




function createUI(peoples) {
  tabRoot.innerHTML = ``
  peoples.forEach((person) => {
    let li = document.createElement(`li`)
    let img = document.createElement(`img`)
    img.setAttribute(`src`, person.image)
    let h4 = document.createElement(`h4`)
    h4.innerText = person.name
    let p = document.createElement(`p`)
    p.innerText = person.description
    let a = document.createElement(`a`)
    a.setAttribute(`href`, person.wikiLink)
    a.innerText = `Know More`
    li.append(img, h4, p, a)
    tabRoot.append(li)
  })
}

createUI(allPeoples)


