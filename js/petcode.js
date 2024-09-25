(function() {
    // Definindo as variáveis
    let titulo = "PETCode";
    let descricao = "O PETCode é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é ajudar os alunos do C3 a peidar cheiroso.";
    let imagemURL = "../imagens/main/petcode.png";
    let classe = "petcode";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoPetcode = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
