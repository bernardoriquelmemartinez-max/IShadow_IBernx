
// ===============================
// CURSOR PERSONALIZADO
// ===============================

const cursor = document.createElement("div");

cursor.className = "custom-cursor";

document.body.appendChild(cursor);


document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});



// ===============================
// MÚSICA DE FONDO
// ===============================

const music = document.getElementById("music");


document.addEventListener("click",()=>{

    if(music){

        music.play();

    }

},{once:true});




// ===============================
// PARTÍCULAS
// ===============================


function createParticle(){


    const particle = document.createElement("span");


    particle.className="particle";


    particle.style.left =
    Math.random()*window.innerWidth+"px";


    particle.style.animationDuration =
    (Math.random()*5+3)+"s";


    document.body.appendChild(particle);



    setTimeout(()=>{

        particle.remove();

    },8000);


}



setInterval(createParticle,300);




// ===============================
// ANIMACIÓN DE TARJETAS
// ===============================


const cards =
document.querySelectorAll(".card");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}



});


});



cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.7s";


observer.observe(card);


});
