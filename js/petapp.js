(function() {
    // Definindo as variáveis
    let titulo = "PET App";
    let descricao = "O PET App é um projeto que faz parte do PET de Ciências computacionais. O objetivo do projeto é mexer no celular";
    let imagemURL = "../imagens/main/petapp.png";
    let classe = "petapp";

    let paragrafo1 = "paragrafo de teste para o PETAPP";
    let paragrafo2 = "estou apenas testando para o PETAPP";
    let paragrafo3 = "testo novamente para o PETAPP";
    let paragrafo4 = "não paro de testar para o PETAPP";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoPetapp = function() {
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
