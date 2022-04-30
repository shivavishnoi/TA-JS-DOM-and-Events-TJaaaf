let buttonRoot = document.querySelector(`.tagbuttons`)
let tabRoot = document.querySelector(`ul`)

let allPeoples = []
got.houses.forEach((house) => {
  house.people.forEach((person) => {
    allPeoples.push(person)
  })
})


// button events
let allTags = got.houses.map((house) => house.name)
let activeHouse = ``
function createTagsUI(tags = []) {
  buttonRoot.innerHTML = ``
  tags.forEach((tag) => {
    let button = document.createElement(`button`)
    button.innerText = tag
    if (activeHouse == tag) {
      button.classList.add(`active`)
    }
    button.addEventListener(`click`, () => {
      activeHouse = tag
      let peopleOfTheHouse = got.houses.find((house) => house.name == tag).people || []
      console.log(peopleOfTheHouse)
      createUI(peopleOfTheHouse)
      createTagsUI(allTags)
    })
    buttonRoot.append(button)
  })
}
createTagsUI(allTags)

let input = document.querySelector(`input`)

function handleText(e) {
  let searchText = e.target.value
  let filteredPeople = allPeoples.filter((person) => person.name.toLowerCase().includes(searchText.toLowerCase()))
  createUI(filteredPeople)
}

input.addEventListener(`input`, handleText)




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


