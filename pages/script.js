// Check the current page and add relevant event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Check if on the Sign-Up page
    if (document.title === "Sign Up") {
        const signUpForm = document.querySelector("form");
        signUpForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Sign up successful! Redirecting to login page...");
            window.location.href = "login.html"; // Redirect to Login page
        });
    }

    // Check if on the Login page
    if (document.title === "Login") {
        const loginForm = document.querySelector("form");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Login successful! Redirecting to homepage...");
            window.location.href = "homepage.html"; // Redirect to Homepage
        });
    }

    // Check if on the Homepage
    if (document.title === "Grocery Application") {
        const addButton = document.getElementById("add-button");
        addButton.addEventListener("click", () => {
            alert("Add functionality coming soon!");
            // Simulate an action here, like showing an input to add items
        });
    }
});
