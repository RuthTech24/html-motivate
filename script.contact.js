document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page name
    const navLinks = document.querySelectorAll(".nav-links a"); // Get all the links

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href"); // Get each link's href
        if (linkPath === currentPage) {
            link.classList.add("active"); // Add the 'active' class if the link matches the current page
        }
    });
});