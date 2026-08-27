function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    if (name === "" || email === "" || subject === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    formMessage.textContent = "Message submitted successfully!";

    formMessage.style.color = "green";

    contactForm.reset();

});