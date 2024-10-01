(function() {
    // Definindo as variáveis
    let titulo = "Momentos PETs";
    let descricao = "O Momentos PETs é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é guardar momentos";
    let imagemURL = "../imagens/main/momentos.png";
    let classe = "momentos";

    let paragrafo1 = "paragrafo de teste para o momentos";
    let paragrafo2 = "estou apenas testando para o momentos";
    let paragrafo3 = "testo novamente para o momentos";
    let paragrafo4 = "não paro de testar para o momentos";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoMomentos = function() {
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
