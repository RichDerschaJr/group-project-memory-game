// CODE FOR TIMER

var countDownDuration = 300;
var x = setInterval(function () {
  countDownDuration--;
  var minutes = Math.floor(countDownDuration / 60);
  var seconds = countDownDuration % 60;
  document.getElementById("timer").innerHTML = minutes + " m" + seconds + "s";
  if (countDownDuration < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "TIMES UP!";
  }
}, 1000);

// CODE FOR GAME

const cards = document.querySelectorAll(".card");
const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const timer = document.querySelector("#timer");
let flippedCards = [];
let matchedCards = [];
let startTime;

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function startGame() {
  // shuffle cards and set up game
  startTime = new Date();
}

function resetGame() {
  // reset game board and variables
}

function flipCard() {
  // flip card and check for matches
  if (flippedCards.length === 2) {
    // check if cards match and remove them if they do
  } else {
    // flip card back over if it doesn't match
  }
}

// const cards = document.querySelectorAll(".card");
// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add("flipped");

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;

//     return;
//   }

//   secondCard = this;
//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch;
// }
// let cards = [
//   ["Ace", "Spades"],
//   ["Two", "Spades"],
//   ["Three", "Spades"],
//   ["Ace", "Hearts"],
//   ["Two", "Hearts"],
//   ["Three", "Hearts"],
//   ["Ace", "Clubs"],
//   ["Two", "Clubs"],
//   ["Three", "Clubs"],
//   ["Ace", "Diamonds"],
//   ["Two", "Diamonds"],
//   ["Three", "Diamonds"],
// ];

// let cardGrid = [];
// let gridSize = 4;

// for (let i = 0; i < gridSize; i++) {
//   cardGrid[i] = [];
//   for (let j = 0; j < gridSize; j++) {
//     let randomCardIndex = Math.floor(Math.random() * cards.length);
//     let randomCard = cards.splice(randomCardIndex, 1)[0];
//     cardGrid[i][j] = randomCard;
//   }
// }

// console.log(cardGrid);

// for (let i = 0; i < gridSize; i++) {
//   for (let j = 0; j < gridSize; j++) {
//     let currentCard = cardGrid[i][j];
//     if (cardGrid[i][j + 1] && currentCard[0] === cardGrid[i][j + 1][0]) {
//       console.log(`Cards match: ${currentCard} and ${cardGrid[i][j + 1]}`);
//     }
//     if (
//       cardGrid[i + 1] &&
//       cardGrid[i + 1][j] &&
//       currentCard[0] === cardGrid[i + 1][j][0]
//     ) {
//       console.log(`Cards match: ${currentCard} and ${cardGrid[i + 1][j]}`);
//     }
//   }
// }
