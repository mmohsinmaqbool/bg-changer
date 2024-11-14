// Get all color buttons
const colorButtons = document.querySelectorAll('.color-btn');

// Function to change background color
function changeBackgroundColor(event) {
    const color = event.target.getAttribute('data-color');
    document.body.style.backgroundColor = color;
}

// Add event listeners to each button
colorButtons.forEach(button => {
    button.addEventListener('click', changeBackgroundColor);
});
