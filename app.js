// JavaScript to toggle between light and dark modes
const body = document.body;
const modeToggle = document.getElementById("modeToggle");

////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const colorSchemeToggle = document.getElementById('color-scheme-toggle');
    const body = document.body;

    // Set the initial color scheme to dark mode
    body.classList.add('dark-mode');

    const icon = colorSchemeToggle.querySelector('i');

    // Set the initial icon to the sun icon (light mode)
    icon.classList.add('fa-solid', 'fa-xl', 'fa-sun', 'light-mode-icon');

    colorSchemeToggle.addEventListener('click', function () {
      body.classList.toggle('light-mode');
      body.classList.toggle('dark-mode');

      // Toggle the icon classes
      if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun', 'light-mode-icon');
        icon.classList.add('fa-moon', 'dark-mode-icon');
      } else {
        icon.classList.remove('fa-moon', 'dark-mode-icon');
        icon.classList.add('fa-sun', 'light-mode-icon');
      }
    });
  });

////////////////////
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