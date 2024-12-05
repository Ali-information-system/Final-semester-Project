document.addEventListener("DOMContentLoaded", () => {
    // Sign-Up Page Logic
    if (document.title === "Sign Up") {
        const signUpForm = document.getElementById("signupForm");
        signUpForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Sign up successful! Redirecting to Login page...");
            window.location.href = "login.html";
        });
    }

    // Login Page Logic
    if (document.title === "Login") {
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Login successful! Redirecting to Homepage...");
            window.location.href = "homepage.html";
        });
    }

    // Homepage Logic
    if (document.title === "Grocery Application") {
        const addButton = document.getElementById("add-button");
        addButton.addEventListener("click", () => {
            alert("Add functionality coming soon!");
        });
    }
});
