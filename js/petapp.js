(function() {
    // Definindo as variáveis
    let titulo = "PET App";
    let descricao = "O PET App é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é mexer no celular";
    let imagemURL = "../imagens/main/petapp.png";
    let classe = "petapp";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoPetapp = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
