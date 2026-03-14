// script.js
document.addEventListener("DOMContentLoaded", function() {
    const subscribeForm = document.querySelector("#subscribe-form");
    subscribeForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        alert("Thank you for subscribing, " + email + "!");
        // In a real scenario, you would save the email to a database or email service
    });
});
