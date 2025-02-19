document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector("header");

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Sticky header effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(20, 20, 20, 0.95)";
        } else {
            header.style.background = "rgba(20, 20, 20, 0.9)";
        }
    });

    // Contact Form Validation
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let formMessage = document.getElementById("form-message");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "All fields are required!";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
        }
    });
});
