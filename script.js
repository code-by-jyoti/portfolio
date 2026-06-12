const text =
    "Building Modern Web Experiences";

let index = 0;

const typing =
    document.querySelector(".typing");

function type() {
    if (index < text.length) {
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

type();

const reveals =
    document.querySelectorAll(".reveal");

window.addEventListener(
    "scroll", () => {
        reveals.forEach(item => {
            const top =
                item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                item.classList.add("active");
            }

        });

    }
);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});


navLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
    });

});