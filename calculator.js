// Get the screen and buttons
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === 'C') {
            clearScreen();
        } else if (button.value === 'DEL') {
            deleteFromScreen();
        } else if (button.value === '=') {
            calculate();
        } else {
            appendToScreen(button.value);
        }
    });
});

// Function to append value to screen
function appendToScreen(value) {
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    screen.value = '';
}

// Function to delete last character from screen
function deleteFromScreen() {
    screen.value = screen.value.slice(0, -1);
}

// Function to calculate the expression
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}
