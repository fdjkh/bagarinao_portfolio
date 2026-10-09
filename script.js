```javascript
// ================= NAVIGATION =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"
            });

            // Update the URL hash
            history.replaceState(null, "", targetId);
        }
    });
});


// ================= ACTIVE NAVIGATION LINK =================

const sections = document.querySelectorAll("main section");

function updateActiveLink() {
    let currentSection = "home";

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 150) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive =
            link.getAttribute("href") === `#${currentSection}`;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


// ================= AUTOMATIC COPYRIGHT YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
```
