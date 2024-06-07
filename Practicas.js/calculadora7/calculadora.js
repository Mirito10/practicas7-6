function clearDisplay() {
    document.getElementById("calculadora").value = "";
}

function deleteLast() {
    let display = document.getElementById("calculadora");
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById("calculadora");
    display.value += value;
}

function calculateResult() {
    let display = document.getElementById("calculadora");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
