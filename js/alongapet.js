(function() {
    // Definindo as variáveis
    let titulo = "AlongaPET";
    let descricao = "O AlongaPET incentiva alunos da FURG a praticarem esportes para melhorar a saúde física, mental e a criatividade. Com atividades como futsal e handebol, o projeto promove o bem-estar e a socialização no ambiente universitário. Saiba mais sobre essa iniciativa em crescimento!";
    let imagemURL = "../imagens/main/alongapet_preto.png";
    let classe = "alongapet";

    let paragrafo1 = "O AlongaPET é um projeto de extensão que visa estimular a prática esportiva entre os alunos da FURG, especialmente os do Centro de Ciências Computacionais.";
    let paragrafo2 = "Inspirado por estudos sobre os benefícios do esporte na saúde física e mental, o AlongaPET busca reduzir o estresse e melhorar a criatividade e a interação entre os participantes.";
    let paragrafo3 = "A iniciativa oferece atualmente atividades de futsal, vôlei e handebol, promovendo encontros regulares para prática e integração.";
    let paragrafo4 = "Apesar dos desafios, como a dependência de locais específicos para as atividades, o AlongaPET já realizou quatro encontros até novembro de 2024, com foco em futsal e handebol. O projeto continua a se expandir, visando alcançar um público maior e reforçar a importância da atividade física na vida acadêmica. Conheça mais sobre as atividades e a programação do AlongaPET!";

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
