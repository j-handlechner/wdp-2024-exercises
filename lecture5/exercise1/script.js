// Select the button and the box
const button = document.querySelector(".change-color-button");
const colorBox = document.querySelector('.color-box');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
}

// Add an event listener to the button
button.addEventListener('click', () => {
  // Change the box's background color to a random color
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
});