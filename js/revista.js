(function() {
    // Definindo as variáveis
    let titulo = "Revista";
    let descricao = "A ICCEEg é uma revista digital que dá voz à pesquisa acadêmica nas áreas de ciências exatas e engenharia. Aberta para submissões e com revisão anônima, a revista incentiva a troca de conhecimento e o crescimento científico. Explore mais sobre como participar!";
    let imagemURL = "../imagens/main/revista.png";
    let classe = "revista";

    let paragrafo1 = "A ICCEEg (Revista de Iniciação Científica em Ciências Exatas e Engenharia) é um periódico semestral digital, dedicado a divulgar pesquisas de acadêmicos ligados às ciências exatas e à engenharia.";
    let paragrafo2 = "De acesso livre, a revista busca estimular a disseminação de conhecimento nessas áreas por meio da publicação de artigos acessíveis a todos.";
    let paragrafo3 = "Suas edições têm submissão aberta ao público, e a revisão dos artigos ocorre de forma anônima por voluntários comprometidos, garantindo uma avaliação imparcial e enriquecedora.";
    let paragrafo4 = "A ICCEEg é uma excelente oportunidade para alunos e pesquisadores contribuírem com a comunidade científica e impulsionarem suas carreiras acadêmicas.";

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
