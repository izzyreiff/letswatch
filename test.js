// Enable form submission on button click
submitButton.addEventListener("click", submitForm);

// Enable form submission on Enter key press
userInputs.forEach((input) => {
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            submitForm();
        }
    });
});