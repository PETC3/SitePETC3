(function() {
    // Definindo as variáveis
    let titulo = "Revista";
    let descricao = "A Revista é um projeto que faz parte do PET de Ciências computacionais. O objetivo é ler gibi da Turma da Mônica";
    let imagemURL = "../imagens/main/revista.png";
    let classe = "revista";

    let paragrafo1 = "paragrafo de teste para o livro";
    let paragrafo2 = "estou apenas testando para o livro";
    let paragrafo3 = "testo novamente para o livro";
    let paragrafo4 = "não paro de testar para o livro";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoRevista = function() {
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
