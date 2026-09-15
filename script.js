// =========================================================
// CURRENT YEAR
// =========================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================================
// MOBILE MENU
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });


    // Close menu after clicking a link

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


// =========================================================
// PLACEHOLDER LINK WARNING
// =========================================================

const placeholderLinks = document.querySelectorAll('a[href="#"]');

placeholderLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "This link is still a placeholder. Add your actual GitHub or Live Demo link."
        );

    });

});