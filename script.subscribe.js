document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("subscribe-form");

    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        
        // Simple validation
        if (email) {
            alert("Thank you for subscribing, " + email + "!");
            // You can replace the alert with an actual form submission logic, like sending to a server.
        } else {
            alert("Please enter a valid email address.");
        }
    });
});