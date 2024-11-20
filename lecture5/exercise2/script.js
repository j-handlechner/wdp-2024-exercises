const links = document.querySelectorAll('a');
const possibleColors = ['red', 'green', 'blue', 'grey', 'pink', 'purple', 'orange'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * possibleColors.length);
    return possibleColors[randomIndex]
}

links.forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        link.style.color = getRandomColor();
    });

    link.addEventListener('mouseleave', (event) => {
        link.style.color = 'black';
    });
});
