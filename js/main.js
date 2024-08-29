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
