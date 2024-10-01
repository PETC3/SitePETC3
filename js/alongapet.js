(function() {
    // Definindo as variáveis
    let titulo = "AlongaPET";
    let descricao = "O AlongaPET é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é ajudar os alunos do C3 a alongar o pinto.";
    let imagemURL = "../imagens/main/alongapet_preto.png";
    let classe = "alongapet";

    let paragrafo1 = "paragrafo de teste para o alongapinto";
    let paragrafo2 = "estou apenas testando para o alongapinto";
    let paragrafo3 = "testo novamente para o alongapinto";
    let paragrafo4 = "não paro de testar para o alongapinto";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoAlonga = function() {
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
