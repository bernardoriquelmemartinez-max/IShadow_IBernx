/*======================================================
                    CURSOR
======================================================*/

.custom-cursor{

    position:fixed;

    width:16px;

    height:16px;

    border-radius:50%;

    background:white;

    pointer-events:none;

    z-index:999999;

    transform:

    translate(-50%,-50%);

    box-shadow:

    0 0 15px white,
    0 0 25px rgba(0,212,255,.7);

    transition:

    width .2s,
    height .2s,
    background .2s;

}


.cursor-hover{

    width:28px;

    height:28px;

    background:var(--secondary);

}


/*======================================================
                    PARTICULAS
======================================================*/

.particle{

    position:fixed;

    bottom:-20px;

    border-radius:50%;

    pointer-events:none;

    z-index:-1;

    animation:

    floatUp linear forwards;

}


@keyframes floatUp{

    from{

        transform:translateY(0);

        opacity:.8;

    }


    to{

        transform:translateY(-120vh);

        opacity:0;

    }

}


/*======================================================
                    BOTON ARRIBA
======================================================*/

.top-button{

    position:fixed;

    right:30px;

    bottom:30px;

    width:55px;

    height:55px;

    border:none;

    border-radius:50%;

    cursor:pointer;

    font-size:20px;

    color:white;

    background:

    linear-gradient(
        135deg,
        var(--primary),
        var(--secondary)
    );

    box-shadow:

    0 0 25px rgba(155,61,255,.5);

    z-index:999;

    display:none;

}


.top-button:hover{

    transform:translateY(-5px);

}


/*======================================================
                    AUDIO
======================================================*/

audio{

    display:none;

}


/*======================================================
                    SCROLLBAR
======================================================*/

::-webkit-scrollbar{

    width:10px;

}


::-webkit-scrollbar-track{

    background:#07000f;

}


::-webkit-scrollbar-thumb{

    background:

    linear-gradient(
        var(--primary),
        var(--secondary)
    );

    border-radius:30px;

}


/*======================================================
                    RESPONSIVE
======================================================*/


@media(max-width:1200px){


    .profile-card{

        flex-direction:column;

        text-align:center;

    }


    .profile-info{

        display:flex;

        flex-direction:column;

        align-items:center;

    }


}



@media(max-width:992px){


    nav{

        flex-direction:column;

        gap:20px;

        padding:18px 5%;

    }


    .links{

        gap:14px;

    }


    .profile-info h1{

        font-size:52px;

    }


}



@media(max-width:768px){


    section{

        padding:80px 6%;

    }


    .profile-card{

        padding:35px;

    }


    .profile-info h1{

        font-size:40px;

    }


    .profile-info h2{

        font-size:22px;

    }


    .profile-info p{

        font-size:16px;

    }


    .avatar{

        width:210px;

        height:210px;

    }


    .buttons a{

        width:100%;

        text-align:center;

    }


    section h2{

        font-size:34px;

    }


}



@media(max-width:480px){


    .logo{

        font-size:24px;

    }


    .links a{

        font-size:13px;

    }


    .avatar{

        width:170px;

        height:170px;

    }


    .profile-info h1{

        font-size:32px;

    }


    .card{

        padding:25px;

    }


}// ======================================================
// PARTICULAS OPTIMIZADAS
// ======================================================

const particleLimit = 35;

function createParticle(){

    const particles =
    document.querySelectorAll(".particle");


    if(particles.length >= particleLimit)
    return;



    const particle =
    document.createElement("span");


    particle.className="particle";


    const size =
    Math.random()*8+3;


    particle.style.width =
    size+"px";


    particle.style.height =
    size+"px";


    particle.style.left =
    Math.random()*window.innerWidth+"px";


    particle.style.background =
    Math.random() > .5
    ? "#9b3dff"
    : "#00d4ff";


    particle.style.animationDuration =
    Math.random()*5+6+"s";


    document.body.appendChild(particle);



    setTimeout(()=>{

        particle.remove();

    },12000);


}



setInterval(createParticle,700);




// ======================================================
// EFECTO ESCRITURA
// ======================================================


const typingTitle =
document.querySelector(".profile-info h2");


if(typingTitle){


    const text =
    typingTitle.textContent;


    typingTitle.textContent="";


    let index=0;



    function typing(){


        if(index < text.length){


            typingTitle.textContent +=
            text.charAt(index);


            index++;


            setTimeout(typing,70);


        }


    }


    typing();


}




// ======================================================
// BOTON VOLVER ARRIBA
// ======================================================


const topButton =
document.createElement("button");


topButton.className =
"top-button";


topButton.innerHTML =
"▲";


document.body.appendChild(topButton);




window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.style.display =
        "block";


    }else{


        topButton.style.display =
        "none";


    }


});



topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




// ======================================================
// CONSOLA
// ======================================================


console.log(
"%cIShadow_IBernx Portfolio",
"color:#9b3dff;font-size:22px;font-weight:bold;"
);


console.log(
"%cOptimized Performance Edition",
"color:#00d4ff;font-size:14px;"
);
