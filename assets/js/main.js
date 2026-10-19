
/* javascript */
const data = [
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

function randomArrayIndex(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

document.addEventListener("click", loadRandom);
function loadRandom(){
	let result = randomArrayIndex(data);
	console.log(result);
	let div = document.querySelector(".result");
	div.innerHTML = `
		<h3 class="name">${result.name}
			<span class="age">${result.age}</span>
		</h3>
		<img src="${result.url}">
	`;
};
loadRandom();