(function() {
    // Definindo as variáveis
    let titulo = "PET de Ciências Computacionais";
    let descricao = "O PET Ciências Computacionais é um grupo de 18 estudantes de automação, computação e sistemas de informação que, com a orientação de um professor, explora ensino, pesquisa e extensão para criar experiências de aprendizado únicas.";
    let imagemURL = "../imagens/main/logo_pet_colorida.png";
    let classe = "";

    let paragrafo1 = "O PET (Programa de Educação Tutorial), criado em 1979 pela CAPES e consolidado pelo Ministério da Educação, é uma iniciativa que visa integrar ensino, pesquisa e extensão em grupos organizados por cursos nas Instituições de Ensino Superior do país.";
    let paragrafo2 = "Orientados pela educação tutorial e pelo princípio da indissociabilidade entre ensino e prática, os grupos PET, formados por estudantes e tutores docentes, promovem uma formação completa, expandindo o conhecimento e contribuindo para uma compreensão integral do mundo e da própria carreira.";
    let paragrafo3 = "No PET Ciências Computacionais, esse espírito se traduz em projetos que impactam a vida acadêmica e profissional dos membros e de toda a comunidade universitária.";
    let paragrafo4 = "Quer saber mais? Acompanhe nossas ações e projetos ou siga-nos no Instagram @petc3furg.";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoPet = function() {
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
