// Animación de aparición al hacer scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// Efecto de brillo siguiendo el mouse

document.addEventListener("mousemove", (e) => {

    document.body.style.background =
    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(141,60,255,.10),
    #050505 45%)`;

});

// Efecto al cargar

window.addEventListener("load", () => {

    document.querySelector(".container").style.transform = "scale(1)";
    document.querySelector(".container").style.opacity = "1";

});

// Preparación inicial

const container = document.querySelector(".container");

container.style.opacity = "0";
container.style.transform = "scale(.95)";
container.style.transition = ".8s";

// Pequeño efecto al pasar el mouse por las tarjetas

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});
