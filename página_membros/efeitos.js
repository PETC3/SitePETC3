window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

window.efeitos = ScrollReveal({reset:true})

efeitos.reveal('.efeito',{
    duration: 2000,
    distance: '90px',
})