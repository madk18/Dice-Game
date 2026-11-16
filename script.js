// waxaan soo qaadaneynaa wixii aan rabno

const rollButton = document.getElementById("rollButton")
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const result = document.getElementById("result")

// addEventLister markaan clikc buttonka siiyo

rollButton.addEventListener("click", function () {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1
  const randomNumber2 = Math.floor(Math.random() * 6) + 1

  dice1.src = `images/dice${randomNumber1}.svg`
  dice2.src = `images/dice${randomNumber2}.svg`

  if (randomNumber1 > randomNumber2) {
    result.textContent = "Player 1 wins 🏆"
  } else if (randomNumber2 > randomNumber1) {
    result.textContent = "Player 2 wins! 😎 "
  } else {
    result.textContent = "Draw! 📍"
  }
})
