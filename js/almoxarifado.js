(function() {
    // Definindo as variáveis
    let titulo = "Almoxarifado";
    let descricao = "O Almoxarifado é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto guardar";
    let imagemURL = "../imagens/main/almoxarifado.png";
    let classe = "almoxarifado";

    let paragrafo1 = "paragrafo de teste para o almoxarifado";
    let paragrafo2 = "estou apenas testando para o almoxarifado";
    let paragrafo3 = "testo novamente para o almoxarifado";
    let paragrafo4 = "não paro de testar para o almoxarifado";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoAlmoxarifado = function() {
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
