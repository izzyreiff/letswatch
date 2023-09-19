// JavaScript to toggle between light and dark modes
const body = document.body;
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Form validation and submission
const submitButton = document.getElementById("submitButton");
const userInputs = [document.getElementById("User1"), document.getElementById("User2"), document.getElementById("User3"), document.getElementById("User4")];
const errorMessage = document.getElementById("errorMessage");

// Function to check if at least two user inputs are filled
function isFormValid() {
    let filledCount = 0;
    for (const input of userInputs) {
        if (input.value.trim() !== "") {
            filledCount++;
        }
    }
    return filledCount >= 2;
}

// Function to handle form submission
function submitForm() {
    if (isFormValid()) {
        // Form is valid, you can submit it here or perform other actions
        alert("Form is valid and can be submitted!");
        // Clear the error message
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "At least two usernames must be submitted!";
    }
}

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