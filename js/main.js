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
})
