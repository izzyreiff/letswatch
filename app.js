// JavaScript to toggle between light and dark modes
const body = document.body;
const modeToggle = document.getElementById("toggle");
// Form validation and submission
const submitButton = document.getElementById("submitButton");
const userInputs = [document.getElementById("User1"), document.getElementById("User2"), document.getElementById("User3"), document.getElementById("User4")];
const errorMessage = document.getElementById("errorMessage");
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

// Enable Light and Dark mode toggle
document.addEventListener('DOMContentLoaded', function () {
    const colorSchemeToggle = document.getElementById('toggle');
    const body = document.body;

    colorSchemeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    });
});

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
        // alert("Form is valid and can be submitted!");
        // Clear the error message
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "At least two usernames must be submitted!";
    }
    numUsers = 0;
    const userInput1 = userInputs[0];
    const value1 = userInput1.value;
    if (value1 !== "") {
        console.log("Value of User1 input:", value1);
        numUsers++;
    }
    const userInput2 = userInputs[1];
    const value2 = userInput2.value;
    if (value2 !== "") {
        console.log("Value of User2 input:", value2);
        numUsers++;
    }
    const userInput3 = userInputs[2];
    const value3 = userInput3.value;
    if (value3 !== "") {
        console.log("Value of User3 input:", value3);
        numUsers++;
    }
    const userInput4 = userInputs[3];
    const value4 = userInput4.value;
    if (value4 !== "") {
        console.log("Value of User4 input:", value4);
        numUsers++;
    }
    console.log(numUsers)
    //////// Now actually run program LOL

    

}