window.addEventListener("scroll", function(){
    let logo = document.querySelector('#logo');
  
    
    let triggerHeight = window.innerHeight * 0.9;
  
    // Adiciona a classe 'nova-cor' quando o scroll passa de 100vh
    if (window.scrollY > triggerHeight) {
      logo.src = '../imagens/main/logo_pet_branca.png';
    } else {
      logo.src = '../imagens/main/logo_pet_preta.png';
    }
  })