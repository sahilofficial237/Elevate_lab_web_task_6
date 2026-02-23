const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form submission

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation (Regex)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message cannot be empty.";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    }
});