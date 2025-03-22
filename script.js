document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Responsive Navbar Toggle (for mobile)
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.classList.add("nav-toggle");
    document.querySelector("header .container").appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });

    // Scroll effect for navbar background
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 0, 0, 0.8)";
        } else {
            header.style.background = "rgba(0, 0, 0, 0.6)";
        }
    });
});
