// ======================================================
// ISHADOW_IBERNX PORTFOLIO
// Script.js Optimizado
// ======================================================


// ======================================================
// CURSOR PREMIUM OPTIMIZADO
// ======================================================

const cursor = document.createElement("div");

cursor.className = "custom-cursor";

document.body.appendChild(cursor);


let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;


document.addEventListener("mousemove", e => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});


function animateCursor(){

    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.transform =
    `translate(${cursorX}px,${cursorY}px) translate(-50%,-50%)`;

    requestAnimationFrame(animateCursor);

}

animateCursor();



document.querySelectorAll("a,button")
.forEach(element=>{

    element.addEventListener("mouseenter",()=>{

        cursor.style.width="26px";
        cursor.style.height="26px";
        cursor.style.background="#00d4ff";

    });


    element.addEventListener("mouseleave",()=>{

        cursor.style.width="16px";
        cursor.style.height="16px";
        cursor.style.background="#fff";

    });

});



// ======================================================
// MÚSICA
// ======================================================

const music=document.getElementById("music");

let musicStarted=false;


document.addEventListener("click",()=>{

    if(music && !musicStarted){

        music.volume=.35;

        music.play().catch(()=>{});

        musicStarted=true;

    }

},{once:true});




// ======================================================
// SCROLL SUAVE
// ======================================================

document.querySelectorAll("a[href^='#']")
.forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(
link.getAttribute("href")
);


if(target){

target.scrollIntoView({

behavior:"smooth"

});

}


});

});




// ======================================================
// NAVBAR OPTIMIZADA
// ======================================================

const nav=document.querySelector("nav");


let lastScroll=0;


window.addEventListener("scroll",()=>{


let scroll=window.scrollY;


if(scroll===lastScroll)return;


lastScroll=scroll;



if(scroll>80){

nav.style.background="rgba(0,0,0,.80)";
nav.style.padding="15px 8%";


}else{


nav.style.background="rgba(0,0,0,.45)";
nav.style.padding="18px 8%";


}


},{passive:true});





// ======================================================
// ANIMACIONES SCROLL
// ======================================================


const animatedElements=
document.querySelectorAll(
".card,.stat-card,.mission-box"
);



const observer=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


observer.unobserve(entry.target);


}


});


},{
threshold:.15
});



animatedElements.forEach(element=>{

observer.observe(element);

});




// ======================================================
// CONTADORES
// ======================================================


document.querySelectorAll(".stat-card h2")
.forEach(counter=>{


const value=parseInt(counter.textContent);


if(isNaN(value))return;



let started=false;



const countObserver=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting && !started){


started=true;


let current=0;


const timer=setInterval(()=>{


current++;


if(counter.textContent.includes("+")){

counter.textContent=current+"+";


}else if(counter.textContent.includes("%")){


counter.textContent=current+"%";


}else{


counter.textContent=current;


}



if(current>=value){

clearInterval(timer);

}


},45);


}


});


});



countObserver.observe(counter);


});




// ======================================================
// EFECTO ESCALONADO TARJETAS
// ======================================================


document.querySelectorAll(".card")
.forEach((card,index)=>{


card.style.transitionDelay=
`${index*0.05}s`;


});





// ======================================================
// BOTONES
// ======================================================


document.querySelectorAll(".buttons a")
.forEach(button=>{


button.addEventListener("mouseenter",()=>{

button.style.transform=
"translateY(-5px) scale(1.04)";


});


button.addEventListener("mouseleave",()=>{


button.style.transform=
"translateY(0) scale(1)";


});


});




// ======================================================
// TARJETAS LIGHT EFFECT OPTIMIZADO
// ======================================================


document.querySelectorAll(".card")
.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.boxShadow=
"0 0 35px rgba(0,212,255,.25)";


});


card.addEventListener("mouseleave",()=>{


card.style.boxShadow="";


});


});





// ======================================================
// PARTICULAS OPTIMIZADAS
// ======================================================


function createParticle(){


const particle=document.createElement("span");


particle.className="particle";


particle.style.left=
Math.random()*window.innerWidth+"px";



const size=
Math.random()*8+3;



particle.style.width=size+"px";
particle.style.height=size+"px";



const colors=[

"#9b3dff",
"#00d4ff",
"#ffffff"

];



particle.style.background=
colors[Math.floor(Math.random()*colors.length)];



particle.style.animationDuration=
(Math.random()*4+6)+"s";



document.body.appendChild(particle);



setTimeout(()=>{

particle.remove();

},9000);


}


// menos partículas = menos lag

setInterval(createParticle,700);





// ======================================================
// ESCRITURA TITULO
// ======================================================


const typingTitle=
document.querySelector(".profile-info h2");



if(typingTitle){


const text=
typingTitle.textContent;


typingTitle.textContent="";


let i=0;



function type(){


if(i<text.length){


typingTitle.textContent+=text[i];

i++;


setTimeout(type,70);


}


}



type();


}




// ======================================================
// BOTÓN ARRIBA
// ======================================================


const topButton=
document.createElement("button");


topButton.innerHTML="▲";

topButton.className="top-button";


document.body.appendChild(topButton);



Object.assign(topButton.style,{

position:"fixed",
right:"30px",
bottom:"30px",
width:"55px",
height:"55px",
borderRadius:"50%",
border:"none",
cursor:"pointer",
fontSize:"20px",
background:"linear-gradient(135deg,#9b3dff,#00d4ff)",
color:"#fff",
display:"none",
zIndex:"999"

});



window.addEventListener("scroll",()=>{


topButton.style.display=
window.scrollY>500
?"block"
:"none";


},{passive:true});



topButton.onclick=()=>{


window.scrollTo({

top:0,
behavior:"smooth"

});


};





// ======================================================
// LOGO GLOW LIGERO
// ======================================================


const logo=document.querySelector(".logo");


if(logo){


setInterval(()=>{


logo.style.textShadow=
"0 0 25px #9b3dff";


},1500);


}




// ======================================================
// REVELAR SECCIONES
// ======================================================


const sections=
document.querySelectorAll("section");



const sectionObserver=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


sectionObserver.unobserve(entry.target);


}


});


},{
threshold:.15
});



sections.forEach(section=>{

sectionObserver.observe(section);

});





// ======================================================
// CONSOLA
// ======================================================


console.log(
"%cIShadow_IBernx Portfolio",
"color:#9b3dff;font-size:22px;font-weight:bold;"
);


console.log(
"%cOptimized Performance",
"color:#00d4ff;font-size:14px;"
);
