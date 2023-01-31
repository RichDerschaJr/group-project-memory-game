// CODE FOR TIMER
// let header = document.querySelector(header);
// setInterval(() => {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   header.textContent = `${hours}:${minutes}:${seconds}`;
// }, 1000);

// CODE FOR GAME

const softBtn = document.querySelector(".soft-button");
const hardBtn = document.querySelector(".hard-button");
const difficultyBtns = document.querySelector(".difficulty-buttons");
const main = document.querySelector("main");
const hardContainer = document.querySelector(".hard-container");
const softContainer = document.querySelector(".soft-container");
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
  {
    type: "sigil-8",
    url: "assets/hard-card-8.jpg",
  },
  {
    type: "hard-back",
    url: "assets/hard-card-back.jpg",
  },
];

const makeBoard = (deck, where) => {
  deck.forEach((item) => {
    const flipCard = document.createElement("li");
    flipCard.classList.add("flip-card");
    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");
    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");
    const frontImage = document.createElement("img");
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
makeBoard(softCards, "soft");
