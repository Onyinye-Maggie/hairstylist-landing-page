const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your appointment request has been received.");
});