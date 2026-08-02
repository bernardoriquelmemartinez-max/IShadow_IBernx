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


document.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});



function moveCursor(){

    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;


    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";


    requestAnimationFrame(moveCursor);

}


moveCursor();





// ===============================
// MÚSICA DE FONDO
// ===============================


const music = document.getElementById("music");


document.addEventListener("click", ()=>{


    if(music){

        music.volume = 0.35;

        music.play().catch(()=>{});

    }


},{once:true});







// ===============================
// PARTÍCULAS
// ===============================


function createParticle(){


    const particle = document.createElement("span");


    particle.className="particle";


    particle.style.left =
    Math.random() * window.innerWidth + "px";


    particle.style.width =
    Math.random()*6+3+"px";


    particle.style.height =
    particle.style.width;



    particle.style.animationDuration =
    Math.random()*5+4+"s";



    document.body.appendChild(particle);



    setTimeout(()=>{

        particle.remove();

    },9000);


}



setInterval(createParticle,250);







// ===============================
// ANIMACIONES AL APARECER
// ===============================


const elements =
document.querySelectorAll(
".card, section h2, section p, .avatar"
);



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


});



elements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(40px)";


element.style.transition=
"0.8s ease";


observer.observe(element);


});
