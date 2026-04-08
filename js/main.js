/* =========================================
   MENU MOBILE E SIDEBAR OTIMIZADO
========================================= */

const navHeader = document.getElementById('nav_header');

function toggleSidebar() {
    navHeader.classList.toggle('ativo');
}

/* =========================================
   EVENTOS DE ROLAGEM E CABEÇALHO
========================================= */

window.addEventListener("scroll", function() {
    const header = document.querySelector('#header');
    const logoIndex = document.querySelector('#logo'); 

    header.classList.toggle('rolagem', window.scrollY > 0);

    const triggerHeight = window.innerHeight * 0.9;

    if (window.scrollY > triggerHeight) {
        header.classList.add('cor');
        if (logoIndex) logoIndex.src = 'imagens/main/logo_pet_branca.png';
    } else {
        header.classList.remove('cor');
        if (logoIndex) logoIndex.src = 'imagens/main/logo_pet_preta.png';
    }
});

/* =========================================
   ANIMAÇÕES DE NAVEGAÇÃO SINCRONIZADAS
========================================= */

const animateLinks = document.querySelectorAll('.animateLink');
const animateLinksLongo = document.querySelectorAll('.animateLinkLongo');

animateLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        if (link.getAttribute('href') === '#') return;

        event.preventDefault(); 
        document.querySelector('.circle').classList.add('grow');
        
        // Ajustado para 350ms (metade de 0.7s, momento exato em que a tela fica coberta)
        setTimeout(function() {
            window.location.href = link.href;
        }, 350); 
    });
});

animateLinksLongo.forEach(link => {
    link.addEventListener('click', function(event) {
        if (link.getAttribute('href') === '#') return;

        event.preventDefault();
        document.querySelector('.circle').classList.add('growLongo');
        
        // Ajustado para 400ms (duração exata da animação growLongo)
        setTimeout(function() {
            window.location.href = link.href;
        }, 400); 
    });
});

function adicionarAnimacao() {
    const circle = document.querySelector('.circle');
    if(circle) {
        circle.classList.remove('grow');
        void circle.offsetWidth;
        circle.classList.add('grow');
    }
}

/* =========================================
   SLIDER DE PROJETOS (SWIPER)
========================================= */

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',        
            spaceBetween: 15,             
            loop: true,                   
            autoplay: {
                delay: 1000,              
            },
            navigation: {
                nextEl: '.swiper-button-next',  
                prevEl: '.swiper-button-prev',  
            },
            pagination: {
                el: '.swiper-pagination',        
                clickable: true,                 
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 4, spaceBetween: 40 }
            }
        });
    }
});