
/* javascript */
const girlImage = [
	{
		name: "Monica",
		url:
        "assets/img/MONICA.webp"
    },
	{
		name: "Rachel",
		url:
			"assets/img/RACHEL.jpg"
	},
	{
		name: "Pheobe",
		url:
			"assets/img/PHOEBE.jpg"
	},
];
/* javascript */
const guyImage = [
	{
		name: "Ross",
		url:
        "assets/img/ROSS.jpg"
    },
	{
		name: "Chandler",
		url:
			"assets/img/CHANDLER.jpg"
	},
	{
		name: "Joey",
		url:
			"assets/img/JOEY.jpg"
	},
];

// GIRLS BANK
const girls = ["Monica", "Phoebe", "Rachel"];

// GUYS BANK
const guys = ["Joey", "Chandler", "Ross"];

// RANDOMLY SELECT ONE GIRL AND ONE GUY
const girl = girls[Math.floor(Math.random() * girls.length)];
const guy = guys[Math.floor(Math.random() * guys.length)];

// FIND THE IMAGES ON THE PAGE
const girlImage = document.getElementById("girlImage");
const guyImage = document.getElementById("guyImage");
const title = document.getElementById("friendshipTitle");
const text = document.getElementById("friendshipText");
const resultImage = document.getElementById("resultImage");

// ONE GIANT IF / ELSE IF STATEMENT

if (girl === "Monica" && guy === "Joey") {

  girlImage.src = "assets/img/MONICA.webp";
  guyImage.src = "assets/img/JOEY.jpg";
  title.textContent = "Monica + Joey";
  text.textContent = "Wild card! Sometimes the unexpected ships are the most fun?";
  resultImage.src = "assets/img/joeymonica.jpg";

} else if (girl === "Monica" && guy === "Chandler") {

  girlImage.src = "assets/img/MONICA.webp";
  guyImage.src = "assets/img/CHANDLER.jpg";
  title.textContent = "Monica + Chandler";
  text.textContent = "The staple. You pick the ships that go the long haul.";
  resultImage.src = "assets/img/chandlermonica.jpg";

} else if (girl === "Monica" && guy === "Ross") {

  girlImage.src = "assets/img/MONICA.webp";
  guyImage.src = "assets/img/ROSS.jpg";
  title.textContent = "Monica + Ross";
  text.textContent = "EWWW! They are siblings for crying out loud??";
  resultImage.src = "assets/img/rossmonica.jpg";

} else if (girl === "Phoebe" && guy === "Joey") {

  girlImage.src = "assets/img/PHOEBE.jpg";
  guyImage.src = "assets/img/JOEY.jpg";
  title.textContent = "Phoebe + Joey";
  text.textContent = "The one that got away...";
  resultImage.src = "assets/img/joeyphoebe.jpg";

} else if (girl === "Phoebe" && guy === "Chandler") {

  girlImage.src = "assets/img/PHOEBE.jpg";
  guyImage.src = "assets/img/CHANDLER.jpg";
  title.textContent = "Phoebe + Chandler";
  text.textContent = "Wild card! Sometimes the unexpected ships are the most fun?";
  resultImage.src = "assets/img/chandlerphoebe.jpg";

} else if (girl === "Phoebe" && guy === "Ross") {

  girlImage.src = "assets/img/PHOEBE.jpg";
  guyImage.src = "assets/img/ROSS.jpg";
  title.textContent = "Phoebe + Ross";
  text.textContent = "Hot take! Sometimes the unexpected ships are the most fun?";
  resultImage.src = "assets/img/rossphoebe.jpg";

} else if (girl === "Rachel" && guy === "Joey") {

  girlImage.src = "assets/img/RACHEL.jpg";
  guyImage.src = "assets/img/JOEY.jpg";
  title.textContent = "Rachel + Joey";
  text.textContent = "Okay! This one def stirred things up.";
  resultImage.src = "assets/img/joeyrachel.jpg";

} else if (girl === "Rachel" && guy === "Chandler") {

  girlImage.src = "assets/img/RACHEL.jpg";
  guyImage.src = "assets/img/CHANDLER.jpg";
  title.textContent = "Rachel + Chandler";
  text.textContent = "Hot take! Sometimes the unexpected ships are the most fun?";
  resultImage.src = "assets/img/chandlerrachel.jpg";

} else if (girl === "Rachel" && guy === "Ross") {

  girlImage.src = "assets/img/RACHEL.jpg";
  guyImage.src = "assets/img/ROSS.jpg";
  title.textContent = "Rachel + Ross";
  text.textContent = "The hot and cold. Hope you never end up on a break...";
  resultImage.src = "assets/img/rossrachel.jpg";

}
