const button = document.querySelectorAll("button");
const result = document.getElementById("result");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        const buttonValue = button[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        }
        else if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "←") {
            backspace();
        }
        else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    result.value = eval(result.value);
}

function appendValue(buttonValue) {
    result.value = result.value + buttonValue;
}

// New function for backspace
function backspace() {
    result.value = result.value.slice(0, -1);
}