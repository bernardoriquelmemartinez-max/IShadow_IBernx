document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".card").forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {
            card.style.transition = "0.8s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 250);
    });

});
