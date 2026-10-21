
const girls = [
  { name: "Monica", url: "assets/img/MONICA.webp" },
  { name: "Rachel", url: "assets/img/RACHEL.jpg" },
  { name: "Phoebe", url: "assets/img/PHOEBE.jpg" },
];

const guys = [
  { name: "Chandler", url: "assets/img/CHANDLER.jpg" },
  { name: "Ross", url: "assets/img/ROSS.jpg" },
  { name: "Joey", url: "assets/img/JOEY.jpg" },
];

// One entry per combo: key is "Girl-Guy"
const combos = {
  "Monica-Joey": {
    title: "Wild card! Sometimes the unexpected ships are the most fun?",
    img: "assets/img/joeymonica.jpg",
  },
  "Monica-Chandler": {
    title: "The staple. You pick the ships that go the long haul.",
    img: "assets/img/chandlermonica.jpg",
  },
  "Monica-Ross": {
    title: "EWWW! They are siblings for crying out loud??",
    img: "assets/img/rossmonica.jpg",
  },
  "Phoebe-Joey": {
    title: "The one that got away...",
    img: "assets/img/joeyphoebe.jpg",
  },
  "Phoebe-Chandler": {
    title: "Wild card! Sometimes the unexpected ships are the most fun?",
    img: "assets/img/chandlerphoebe.jpg",
  },
  "Phoebe-Ross": {
    title: "Hot take! Sometimes the unexpected ships are the most fun?",
    img: "assets/img/rossphoebe.jpg",
  },
  "Rachel-Joey": {
    title: "Okay! This one def stirred things up.",
    img: "assets/img/joeyrachel.jpg",
  },
  "Rachel-Chandler": {
    title: "Hot take! Sometimes the unexpected ships are the most fun?",
    img: "assets/img/chandlerrachel.jpg",
  },
  "Rachel-Ross": {
    title: "The hot and cold. Hope you never end up on a break...",
    img: "assets/img/rossrachel.jpg",
  },
};

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function loadRandom() {
  const girl = randomItem(girls);
  const guy = randomItem(guys);
  const combo = combos[`${girl.name}-${guy.name}`];
  const div = document.querySelector(".result");

  div.innerHTML = `
    <h3 class="name">${girl.name} + ${guy.name}</h3>
    <div class="people">
      <img src="${girl.url}" alt="${girl.name}">
      <img src="${guy.url}" alt="${guy.name}">
    </div>
    <p class="combo-text">${combo.title}</p>
    <img class="combo-img" src="${combo.img}" alt="${girl.name} and ${guy.name}">
  `;
}

document.addEventListener("click", loadRandom);
loadRandom(); // show one on page load
