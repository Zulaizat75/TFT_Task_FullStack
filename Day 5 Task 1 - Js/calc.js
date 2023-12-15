const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let screenValue = "";


// add event listeners to buttons
for (const item of buttons) {
    item.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (buttonText === "X") {
            appendToScreen("*");
        } else if (buttonText === "AC") {
            clearScreen();
        } else if (buttonText === "÷") {
            appendToScreen("/");
        } else if (buttonText === "=") {
            evaluateExpression();
        } else if (buttonText === "B"){
            backspace();
        } else {
            appendToScreen(buttonText);
    }});
}

// functions to be used in event listeners
// screen value is updated with each button
function appendToScreen(value) {
    screenValue += value;
    screen.value = screenValue;
}

// clear screen value and update screen
function clearScreen() {
    screenValue = "";
    screen.value = screenValue;
}

// evaluate expression and update screen value
function evaluateExpression() {
    try {
        screen.value = eval(screenValue);
    } catch (error) {
        screen.value = "Error";
    }
}

// remove last character from screen value
function backspace() {
    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
}