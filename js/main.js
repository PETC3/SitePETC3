var navHeader = document.getElementById('nav_header');
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if(showSidebar) {
    navHeader.style.marginRight = '0px';
    navHeader.style.animationName = 'showSidebar';
  }
  else {
    navHeader.style.marginRight = '-200vh';
    navHeader.style.animationName = '';
  }
}

window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')

  header.classList.toggle('rolagem', window.scrollY > 0)
  
  let triggerHeight = window.innerHeight * 0.9;

  // Adiciona a classe 'nova-cor' quando o scroll passa de 100vh
  if (window.scrollY > triggerHeight) {
    header.classList.add('cor');
  } else {
    header.classList.remove('cor');
  }
})

// Seleciona todos os links com a classe 'animateLink'
const animateLinks = document.querySelectorAll('.animateLink');

animateLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        document.querySelector('.circle').classList.add('grow'); // Adiciona a classe para iniciar a animação
        
        // Espera o tempo da animação antes de redirecionar
        setTimeout(function() {
            window.location.href = link.href;
        }, 100); // 700ms corresponde à duração da animação
    });
});

function adicionarAnimacao() {
  const circle = document.querySelector('.circle');
  circle.classList.remove('grow'); // Remove a classe para permitir a reativação
  void circle.offsetWidth; // Força o reflow para reiniciar a animação
  circle.classList.add('grow'); // Adiciona a classe para iniciar a animação
}

// Seleciona todos os links com a classe 'animateLinkLongo'
const animateLinksLongo = document.querySelectorAll('.animateLinkLongo');

animateLinksLongo.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        document.querySelector('.circle').classList.add('growLongo'); // Adiciona a classe para iniciar a animação
        
        // Espera o tempo da animação antes de redirecionar
        setTimeout(function() {
            window.location.href = link.href;
        }, 100); // 700ms corresponde à duração da animação
    });
});

function adicionarAnimacaoLonga() {
  const circle = document.querySelector('.circle');
  circle.classList.remove('growLongo'); // Remove a classe para permitir a reativação
  void circle.offsetWidth; // Força o reflow para reiniciar a animação
  circle.classList.add('growLongo'); // Adiciona a classe para iniciar a animação
}

document.addEventListener('DOMContentLoaded', function () {
  // Inicializando o Swiper para a versão responsiva
  const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',        // Ajusta o número de slides com base no espaço disponível
      spaceBetween: 15,             // Distância entre os slides
      loop: true,                   // Habilita o loop
      autoplay: {
          delay: 1000,              // Transição automática
      },
      navigation: {
          nextEl: '.swiper-button-next',  // Botão para o próximo slide
          prevEl: '.swiper-button-prev',  // Botão para o slide anterior
      },
      pagination: {
          el: '.swiper-pagination',        // Elemento da paginação
          clickable: true,                 // Permite clicar nos pontos da paginação
      },
      breakpoints: {
          768: {
              slidesPerView: 2,   // Exibe 2 slides por vez em dispositivos menores
              spaceBetween: 20,   // Distância entre os slides
          },
          1024: {
              slidesPerView: 3,   // Exibe 3 slides por vez em dispositivos maiores
              spaceBetween: 30,   // Distância entre os slides
          },
          1200: {
              slidesPerView: 4,   // Exibe 4 slides por vez em telas grandes
              spaceBetween: 40,   // Distância maior entre os slides
          }
      }
  });
});
