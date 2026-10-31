
let display = document.getElementById("display");

// Add numbers and operators
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}


// Square
function square() {
    try {
        let num = Number(display.value);
        display.value = num * num;
    } catch {
        display.value = "Error";
    }
}

// Square Root
function squareRoot() {
    let num = Number(display.value);

    if (display.value === "" || num < 0) {
        display.value = "Error";
    } else {
        display.value = Math.sqrt(num);
    }
}

// Positive and Negative
function toggleSign() {
    let num = Number(display.value);

    if (display.value !== "") {
        display.value = num * -1;
    }
}
