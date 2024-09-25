(function() {
    // Definindo as variáveis
    let titulo = "AlongaPET";
    let descricao = "O AlongaPET é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é ajudar os alunos do C3 a alongar o pinto.";
    let imagemURL = "../imagens/main/alongapet_preto.png";
    let classe = "alongapet";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoAlonga = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
