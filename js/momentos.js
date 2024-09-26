(function() {
    // Definindo as variáveis
    let titulo = "Momentos PETs";
    let descricao = "O Momentos PETs é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é guardar momentos";
    let imagemURL = "../imagens/main/momentos.png";
    let classe = "momentos";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoMomentos = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
