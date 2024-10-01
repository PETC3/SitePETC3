(function() {
    // Definindo as variáveis
    let titulo = "Lego";
    let descricao = "O LEGO nas Escolas é um projeto que faz parte do PET de Ciências computacionais. O objetivo é brincar de LEGO";
    let imagemURL = "../imagens/main/lego.png";
    let classe = "lego";

    let paragrafo1 = "paragrafo de teste para o lego";
    let paragrafo2 = "estou apenas testando para o lego";
    let paragrafo3 = "testo novamente para o lego";
    let paragrafo4 = "não paro de testar para o lego";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoLego = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;

            document.getElementById('titulo2').textContent = titulo;
            document.getElementById('paragrafo1').textContent = paragrafo1;
            document.getElementById('paragrafo2').textContent = paragrafo2;
            document.getElementById('paragrafo3').textContent = paragrafo3;
            document.getElementById('paragrafo4').textContent = paragrafo4;
        }, 300);
    };
})();
