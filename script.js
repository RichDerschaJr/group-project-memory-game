// CODE FOR TIMER
let header = document.querySelector(header);
setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  header.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

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
  // {
  //   type: "tama-off",
  //   url: "assets/tama-card-off",
  // },
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
