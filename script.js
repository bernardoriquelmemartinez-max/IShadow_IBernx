// ===============================
// CURSOR PERSONALIZADO
// ===============================


const cursor = document.createElement("div");

cursor.className = "custom-cursor";

document.body.appendChild(cursor);



let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;



document.addEventListener("mousemove",(e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});



function animateCursor(){


    cursorX += (mouseX - cursorX) * 0.15;

    cursorY += (mouseY - cursorY) * 0.15;



    cursor.style.left = cursorX + "px";

    cursor.style.top = cursorY + "px";



    requestAnimationFrame(animateCursor);


}


animateCursor();








// ===============================
// MÚSICA DE FONDO
// ===============================


const music = document.getElementById("music");


document.addEventListener("click",()=>{


    if(music){


        music.volume = 0.35;


        music.play().catch(()=>{});


    }


},{once:true});








// ===============================
// PARTICULAS MEJORADAS
// ===============================


function createParticle(){


    const particle =
    document.createElement("span");


    particle.className="particle";



    particle.style.left =
    Math.random()*window.innerWidth+"px";



    let size =
    Math.random()*8+3;



    particle.style.width =
    size+"px";


    particle.style.height =
    size+"px";



    particle.style.animationDuration =
    Math.random()*6+4+"s";



    particle.style.opacity =
    Math.random();



    document.body.appendChild(particle);



    setTimeout(()=>{


        particle.remove();


    },10000);



}



setInterval(createParticle,250);









// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================



const animatedElements =
document.querySelectorAll(
".card,.stat-card,.profile-card,.mission-box"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},{
    threshold:.15
});





animatedElements.forEach(element=>{


    element.style.opacity="0";


    element.style.transform=
    "translateY(50px)";



    element.style.transition=
    "all .8s ease";



    observer.observe(element);



});








// ===============================
// SCROLL SUAVE
// ===============================



document.querySelectorAll("a[href^='#']")
.forEach(link=>{


link.addEventListener("click",(e)=>{


    e.preventDefault();


    const target =
    document.querySelector(
    link.getAttribute("href")
    );


    if(target){


        target.scrollIntoView({

            behavior:"smooth"

        });


    }


});


});








// ===============================
// EFECTO PARALLAX SUAVE
// ===============================


window.addEventListener("mousemove",(e)=>{


const x =
(e.clientX / window.innerWidth - .5) * 10;


const y =
(e.clientY / window.innerHeight - .5) * 10;



document.body.style.backgroundPosition =
`${50 + x}% ${50 + y}%`;


});
