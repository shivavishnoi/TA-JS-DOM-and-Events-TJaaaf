let humanItems = document.querySelectorAll(`.human-items .fa`)
let ComputerItems = document.querySelectorAll(`.computer-items .fa`)

let orignalColor = () => {
  humanItems.forEach((item) => {
    item.style.color = `rgb(6, 55, 98)`
  })
  ComputerItems.forEach((item) => {
    item.style.color = `rgb(106, 15, 15)`
  })
}
orignalColor()
// handle click
let handleClick = (e) => {
  orignalColor()
  humanSelection(e)
  computerSelection()
  decideWinner()
}
humanItems.forEach(icon => {
  icon.addEventListener(`click`, handleClick)
});

// human side logic
let humanSelection = (e) => {
  e.target.style.color = `black`
  document.querySelector(`.human-selected-item-name`).innerText = e.target.dataset.name
}

// computer side logic
let computerSelection = () => {
  let random = Math.floor(Math.random() * 3)
  let randomItem = ComputerItems[random]
  randomItem.style.color = `black`
  document.querySelector(`.computer-selected-item-name`).innerText = randomItem.dataset.name
}

// winner logic
let humanScore = document.querySelector(`.human-score`)
let computerScore = document.querySelector(`.computer-score`)
let decideWinner = () => {
  let humanSelectedItem = document.querySelector(`.human-selected-item-name`).innerText
  let computerSelectedItem = document.querySelector(`.computer-selected-item-name`).innerText
  let joinedItem = humanSelectedItem + computerSelectedItem
  // draw
  if (joinedItem == `RockRock` || joinedItem == `PaperPaper` || joinedItem == `ScissorScissor`) {
    document.querySelector(`.result h1`).innerText = `It's a Draw!!`
    document.querySelector(`.result h1`).style.color = `yellow`
  }
  // computer wins
  else if (joinedItem == `RockPaper` || joinedItem == `ScissorRock` || joinedItem == `PaperScissor`) {
    document.querySelector(`.result h1`).innerText = `You Loose!!`
    document.querySelector(`.result h1`).style.color = `rgb(106, 15, 15)`
    computerScore.innerText = Number(computerScore.innerText) + 1
  }
  // human wins
  else {
    document.querySelector(`.result h1`).innerText = `You Win!!`
    document.querySelector(`.result h1`).style.color = `rgb(6, 55, 98)`
    humanScore.innerText = Number(humanScore.innerText) + 1
  }
}

// refresh
document.querySelector(`.refresh .fa`).addEventListener(`click`, () => {
  humanScore.innerText = `0`
  computerScore.innerText = `0`
  document.querySelector(`.human-selected-item-name`).innerText = ``
  document.querySelector(`.computer-selected-item-name`).innerText = ``
  document.querySelector(`.result h1`).innerText = ``
  orignalColor()
})

