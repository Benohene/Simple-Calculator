// Dom document object model
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("input[type='button']");

    // script for calculator buttons
    for (const button of buttons) {
        const value = button.value;

        // add event listener to each button
        button.addEventListener("click", function () {
            const value = this.value;

            if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch (err) {
                    display.value = "Error";
                }
            } else if (value === "AC") {
                display.value = "";
            } else {
                display.value += value;
            }
        });
    }
});