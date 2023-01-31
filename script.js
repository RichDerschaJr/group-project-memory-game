// CODE FOR TIMER

// CODE FOR GAME
const homepage = document.querySelector(".homepage");
const softBtn = document.querySelector(".soft-button");
const hardBtn = document.querySelector(".hard-button");
const difficultyBtns = document.querySelector(".difficulty-buttons");
const main = document.querySelector("main");
const cardContainer = document.querySelector(".card-container");
const hardContainer = document.querySelector(".hard-container");
const softContainer = document.querySelector(".soft-container");
let flippedCards = [];
const softCards = [
  {
    type: "tama-1",
    url: "assets/tama-card-1.png",
  },
  {
    type: "tama-1",
    url: "assets/tama-card-1.png",
  },
  {
    type: "tama-2",
    url: "assets/tama-card-2.png",
  },
  {
    type: "tama-2",
    url: "assets/tama-card-2.png",
  },
  {
    type: "tama-3",
    url: "assets/tama-card-3.png",
  },
  {
    type: "tama-3",
    url: "assets/tama-card-3.png",
  },
  {
    type: "tama-4",
    url: "assets/tama-card-4.png",
  },
  {
    type: "tama-4",
    url: "assets/tama-card-4.png",
  },
];
const hardCards = [
  {
    type: "sigil-1",
    url: "assets/hard-card-1.jpg",
  },
  {
    type: "sigil-1",
    url: "assets/hard-card-1.jpg",
  },
  {
    type: "sigil-2",
    url: "assets/hard-card-2.jpg",
  },
  {
    type: "sigil-2",
    url: "assets/hard-card-2.jpg",
  },
  {
    type: "sigil-3",
    url: "assets/hard-card-3.jpg",
  },
  {
    type: "sigil-3",
    url: "assets/hard-card-3.jpg",
  },
  {
    type: "sigil-4",
    url: "assets/hard-card-4.jpg",
  },
  {
    type: "sigil-4",
    url: "assets/hard-card-4.jpg",
  },
  {
    type: "sigil-5",
    url: "assets/hard-card-5.jpg",
  },
  {
    type: "sigil-5",
    url: "assets/hard-card-5.jpg",
  },
  {
    type: "sigil-6",
    url: "assets/hard-card-6.jpg",
  },
  {
    type: "sigil-6",
    url: "assets/hard-card-6.jpg",
  },
  {
    type: "sigil-7",
    url: "assets/hard-card-7.jpg",
  },
  {
    type: "sigil-7",
    url: "assets/hard-card-7.jpg",
  },
  {
    type: "sigil-8",
    url: "assets/hard-card-8.jpg",
  },
  {
    type: "sigil-8",
    url: "assets/hard-card-8.jpg",
  },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const makeBoard = (deck, where) => {
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
  shuffle(deck);
  homepage.classList.add("hide");
  deck.forEach((item) => {
    const flipCard = document.createElement("li");
    flipCard.classList.add("flip-card");
    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");
    flipCardInner.setAttribute("data-type", item.type);
    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");
    const frontImage = document.createElement("img");
    frontImage.classList.add("front-image");
    if (where === "soft") {
      frontImage.src = "assets/tama-card-off.png";
    } else {
      frontImage.src = "assets/hard-card-back.jpg";
    }
    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back");
    const backImage = document.createElement("img");
    backImage.src = item.url;
    flipCardBack.append(backImage);
    flipCardFront.append(frontImage);
    flipCardInner.append(flipCardFront, flipCardBack);
    flipCard.append(flipCardInner);
    if (where === "soft") {
      softContainer.append(flipCard);
    } else {
      hardContainer.append(flipCard);
    }
  });
};

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("front-image") && flippedCards.length < 2) {
    e.target.parentNode.parentNode.classList.add("flip");
    flippedCards.push(e.target.parentNode.parentNode);
    console.dir(flippedCards);

    if (flippedCards.length === 2) {
      if (
        flippedCards[0].getAttribute("data-type") ===
        flippedCards[1].getAttribute("data-type")
      ) {
        setTimeout(() => {
          flippedCards[0].classList.add("hide");
          flippedCards[1].classList.add("hide");
          flippedCards = [];
        }, 1500);
      } else {
        setTimeout(() => {
          flippedCards[0].classList.remove("flip");
          flippedCards[1].classList.remove("flip");
          flippedCards = [];
        }, 1500);
      }
    }
  }
});

softBtn.addEventListener("click", () => {
  makeBoard(softCards, "soft");
});
hardBtn.addEventListener("click", () => {
  makeBoard(hardCards, "hard");
});
