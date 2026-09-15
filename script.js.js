script.js
/* =========================
   DARK MODE
========================= */
alert("JavaScript is working!");
const themeButton = document.getElementById("theme-toggle");
const body = document.body;


// Check saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}


// Toggle theme
themeButton.addEventListener("click", function () {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeButton.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("theme", "light");

        themeButton.textContent = "🌙 Dark Mode";
    }

});


/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");


        // Get selected category
        const selectedCategory =
            button.dataset.category;


        // Filter projects
        projectCards.forEach(function (card) {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================
   FORM VALIDATION
========================= */

const form =
    document.getElementById("contact-form");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById("name-error");

const emailError =
    document.getElementById("email-error");

const messageError =
    document.getElementById("message-error");

const formSuccess =
    document.getElementById("form-success");


form.addEventListener("submit", function (event) {

    // Stop normal form submission
    event.preventDefault();


    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    let isValid = true;


    /* NAME */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;
    }


    /* EMAIL */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (
        !emailPattern.test(emailInput.value)
    ) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    /* MESSAGE */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter a message.";

        isValid = false;

    } else if (
        messageInput.value.trim().length < 10
    ) {

        messageError.textContent =
            "Message must be at least 10 characters.";

        isValid = false;
    }


    /* SUCCESS */

    if (isValid) {

        formSuccess.textContent =
            "Your message has been submitted successfully!";

        form.reset();
    }

});

