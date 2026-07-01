const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value
            .replace(/÷/g, "/")
            .replace(/×/g, "*");

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
        appendValue(key);
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }

});