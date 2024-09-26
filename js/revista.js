(function() {
    // Definindo as variáveis
    let titulo = "Revista";
    let descricao = "A Revista é um projeto que faz parte do PET de Ciências computacionais. O objetivo é ler gibi da Turma da Mônica";
    let imagemURL = "../imagens/main/revista.png";
    let classe = "revista";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoRevista = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
