(function() {
    // Definindo as variáveis
    let titulo = "Almoxarifado";
    let descricao = "O Almoxarifado é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto guardar";
    let imagemURL = "../imagens/main/almoxarifado.png";
    let classe = "almoxarifado";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoAlmoxarifado = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
