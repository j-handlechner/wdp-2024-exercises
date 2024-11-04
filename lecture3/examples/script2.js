const button = document.querySelector('button');
const pageBody = document.querySelector('body');

const possibleColors = [
    '#ff0000', // index 0
    '#00ff00', // index 1
    '#0000ff', // index 2
]

console.log("button", button);

button.addEventListener('click', function() {
    const randomColor = chooseRandomColor(possibleColors);
    console.log(`Chosen Color: ${randomColor}`);

    // change the backgroundcolor of the page
    pageBody.style.backgroundColor = randomColor;
});

function chooseRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}