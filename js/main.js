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
