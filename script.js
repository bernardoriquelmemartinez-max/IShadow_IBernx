// ======================================================
// ISHADOW_IBERNX PORTFOLIO
// Script.js - Parte 1
// ======================================================



// ======================================================
// CURSOR PREMIUM
// ======================================================

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

cursorX += (mouseX - cursorX) * 0.18;
cursorY += (mouseY - cursorY) * 0.18;

cursor.style.left = cursorX + "px";
cursor.style.top = cursorY + "px";

requestAnimationFrame(animateCursor);

}

animateCursor();



// Hover sobre botones y enlaces

document
.querySelectorAll("a, button")
.forEach(element=>{

element.addEventListener("mouseenter",()=>{

cursor.style.width="28px";
cursor.style.height="28px";
cursor.style.background="#00d4ff";

});

element.addEventListener("mouseleave",()=>{

cursor.style.width="16px";
cursor.style.height="16px";
cursor.style.background="#ffffff";

});

});



// ======================================================
// MÚSICA
// ======================================================

const music =
document.getElementById("music");

let musicStarted = false;

document.addEventListener("click",()=>{

if(music && !musicStarted){

music.volume=.35;

music.play().catch(()=>{});

musicStarted=true;

}

});



// ======================================================
// SCROLL SUAVE
// ======================================================

document
.querySelectorAll("a[href^='#']")
.forEach(link=>{

link.addEventListener("click",(e)=>{

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
// NAVBAR EFECTO
// ======================================================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

nav.style.background="rgba(0,0,0,.80)";
nav.style.padding="15px 8%";

}else{

nav.style.background="rgba(0,0,0,.45)";
nav.style.padding="18px 8%";

}

});



// ======================================================
// EFECTO TITULO
// ======================================================

const title=document.querySelector(".profile-info h1");

if(title){

title.addEventListener("mouseenter",()=>{

title.style.textShadow=
"0 0 45px #00d4ff";

});

title.addEventListener("mouseleave",()=>{

title.style.textShadow=
"0 0 30px #9b3dff";

});

}// ======================================================
// ANIMACIONES AL HACER SCROLL
// ======================================================

const animatedElements = document.querySelectorAll(
".card, .stat-card, .mission-box"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

animatedElements.forEach(element=>{

observer.observe(element);

});



// ======================================================
// CONTADORES ANIMADOS
// ======================================================

const stats =
document.querySelectorAll(".stat-card h2");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const element = entry.target;

const text = element.textContent;

const value = parseInt(text);

if(isNaN(value)) return;

let start = 0;

const interval = setInterval(()=>{

start++;

if(start >= value){

start = value;

clearInterval(interval);

}

if(text.includes("+")){

element.textContent = start + "+";

}else if(text.includes("%")){

element.textContent = start + "%";

}else{

element.textContent = start;

}

},40);

counterObserver.unobserve(element);

});

});

stats.forEach(stat=>{

counterObserver.observe(stat);

});



// ======================================================
// EFECTO ESCALONADO TARJETAS
// ======================================================

const cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.transitionDelay =
(index*0.08)+"s";

});



// ======================================================
// PARALLAX HERO
// ======================================================

const hero =
document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x =
(e.clientX/window.innerWidth-.5)*20;

const y =
(e.clientY/window.innerHeight-.5)*20;

if(hero){

hero.style.backgroundPosition =
`${50+x}% ${50+y}%`;

}

});



// ======================================================
// EFECTO BOTONES
// ======================================================

document
.querySelectorAll(".buttons a")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform =
"translateY(-6px) scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform =
"translateY(0) scale(1)";

});

});



// ======================================================
// EFECTO TARJETAS
// ======================================================

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX-rect.left;

const y =
e.clientY-rect.top;

card.style.background =
`radial-gradient(circle at ${x}px ${y}px,
rgba(0,212,255,.12),
rgba(255,255,255,.07))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background =
"rgba(255,255,255,.07)";

});

});// ======================================================
// PARTICULAS PREMIUM
// ======================================================

function createParticle(){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*window.innerWidth+"px";

const size=Math.random()*10+4;

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
Math.random()*5+5+"s";

particle.style.opacity=
Math.random();

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},10000);

}

setInterval(createParticle,350);



// ======================================================
// GLOW DINAMICO DEL FONDO
// ======================================================

document.addEventListener("mousemove",(e)=>{

const x=
(e.clientX/window.innerWidth)*100;

const y=
(e.clientY/window.innerHeight)*100;

document.body.style.backgroundPosition=
`${x}% ${y}%`;

});



// ======================================================
// EFECTO ESCRITURA
// ======================================================

const typingTitle=
document.querySelector(".profile-info h2");

if(typingTitle){

const originalText=
typingTitle.textContent;

typingTitle.textContent="";

let index=0;

function typingEffect(){

if(index<originalText.length){

typingTitle.textContent+=
originalText.charAt(index);

index++;

setTimeout(
typingEffect,
70
);

}

}

typingEffect();

}



// ======================================================
// BOTON VOLVER ARRIBA
// ======================================================

const topButton=
document.createElement("button");

topButton.innerHTML="▲";

topButton.className="top-button";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="30px";
topButton.style.bottom="30px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.cursor="pointer";
topButton.style.fontSize="20px";
topButton.style.background=
"linear-gradient(135deg,#9b3dff,#00d4ff)";
topButton.style.color="#fff";
topButton.style.boxShadow=
"0 0 25px rgba(155,61,255,.5)";
topButton.style.display="none";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});



// ======================================================
// EFECTO GLOW EN TARJETAS
// ======================================================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=
"0 0 45px rgba(0,212,255,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});



// ======================================================
// EFECTO LOGO
// ======================================================

const logo=
document.querySelector(".logo");

if(logo){

setInterval(()=>{

logo.style.textShadow=
`0 0 ${20+Math.random()*20}px #9b3dff`;

},900);

}



// ======================================================
// REVELAR SECCIONES
// ======================================================

const sections=
document.querySelectorAll("section");

const sectionObserver=
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,
transform:"translateY(60px)"

},

{

opacity:1,
transform:"translateY(0)"

}

],{

duration:900,
fill:"forwards"

});

}

});

},{

threshold:.15

});

sections.forEach(section=>{

sectionObserver.observe(section);

});



// ======================================================
// MENSAJE CONSOLA
// ======================================================

console.log("%cIShadow_IBernx Portfolio",

"color:#9b3dff;font-size:22px;font-weight:bold;");

console.log("%cDeveloped with ❤️",

"color:#00d4ff;font-size:14px;");
