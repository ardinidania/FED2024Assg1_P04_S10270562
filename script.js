
// Submit function
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector("#contactForm");
    const messageContainer = document.querySelector("#thankYouMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 


        messageContainer.textContent = "Thank you for the message, we will get back to you soon!";
        messageContainer.style.color = "white"; 

        contactForm.reset();
    });
});


// Scroll function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


