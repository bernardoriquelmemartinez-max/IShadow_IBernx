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



    cursor.style.left =
    cursorX + "px";


    cursor.style.top =
    cursorY + "px";



    requestAnimationFrame(animateCursor);

}


animateCursor();









// ===============================
// MÚSICA DE FONDO
// ===============================


const music =
document.getElementById("music");



document.addEventListener("click",()=>{


    if(music){


        music.volume = 0.35;


        music.play()
        .catch(()=>{});


    }


},{once:true});









// ===============================
// PARTICULAS
// ===============================


function createParticle(){


    const particle =
    document.createElement("span");


    particle.className =
    "particle";



    particle.style.left =
    Math.random() *
    window.innerWidth + "px";



    let size =
    Math.random()*8+3;



    particle.style.width =
    size+"px";


    particle.style.height =
    size+"px";



    particle.style.background =
    Math.random() > .5
    ?
    "#b100ff"
    :
    "#00c8ff";



    particle.style.animationDuration =
    Math.random()*5+5+"s";



    document.body.appendChild(
        particle
    );



    setTimeout(()=>{

        particle.remove();

    },10000);


}



setInterval(
    createParticle,
    300
);









// ===============================
// ANIMACIONES SCROLL
// ===============================


const animatedElements =
document.querySelectorAll(

".card, .stat-card, .mission-box"

);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
            "show"
        );


    }


});


},{

threshold:0.15

});





animatedElements.forEach(element=>{


    observer.observe(element);


});









// ===============================
// SCROLL SUAVE
// ===============================


document
.querySelectorAll("a[href^='#']")
.forEach(link=>{


    link.addEventListener(
    "click",
    (e)=>{


        e.preventDefault();



        const section =
        document.querySelector(
        link.getAttribute("href")
        );



        if(section){


            section.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});









// ===============================
// PARALLAX DEL FONDO
// ===============================


document.addEventListener(
"mousemove",
(e)=>{


const x =
(e.clientX /
window.innerWidth - .5)
* 15;



const y =
(e.clientY /
window.innerHeight - .5)
* 15;



document.body.style.backgroundPosition =
`${50+x}% ${50+y}%`;


});









// ===============================
// EFECTO TITULO
// ===============================


const title =
document.querySelector(
".profile-info h1"
);



if(title){


title.addEventListener(
"mouseenter",
()=>{


title.style.textShadow =
"0 0 45px #00c8ff";


});



title.addEventListener(
"mouseleave",
()=>{


title.style.textShadow =
"0 0 30px #b100ff";


});


}
