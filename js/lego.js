(function() {
    // Definindo as variáveis
    let titulo = "Lego";
    let descricao = "O LEGO nas Escolas é um projeto que faz parte do PET de Ciências computacionais. O objetivo é brincar de LEGO";
    let imagemURL = "../imagens/main/lego.png";
    let classe = "lego";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoLego = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
