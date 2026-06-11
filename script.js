const text =
    "Frontend Developer";

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