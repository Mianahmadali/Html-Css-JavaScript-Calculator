// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // If the display is currently '0', replace it with the new value
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value; // Otherwise, append the new value
    }
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '0'; // Reset the display to '0'
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression in the display
        const result = eval(display.innerText);
        display.innerText = result; // Update the display with the result
    } catch (error) {
        display.innerText = 'Error'; // Handle any errors (e.g., invalid expressions)
    }
}