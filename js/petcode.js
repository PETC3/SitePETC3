(function() {
    // Definindo as variáveis
    let titulo = "PETCode";
    let descricao = "O PETCode é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é ajudar os alunos do C3 a peidar cheiroso.";
    let imagemURL = "../imagens/main/petcode.png";
    let classe = "petcode";

    let paragrafo1 = "paragrafo de teste para o PETCcode";
    let paragrafo2 = "estou apenas testando para o PETCode";
    let paragrafo3 = "testo novamente para o PETCode";
    let paragrafo4 = "não paro de testar para o PETCode";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoPetcode = function() {
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
