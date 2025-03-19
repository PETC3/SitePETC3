(function() {
    // Definindo as variáveis
    let titulo = "PETCode";
    let descricao = "O PETCode é o espaço para experimentação prática e troca de conhecimento em computação, automação e sistemas. Com uma variedade de subprojetos, o PETCode promove a inovação e o desenvolvimento acadêmico. Curioso sobre como isso é feito? Saiba mais!";
    let imagemURL = "../imagens/main/petcode.png";
    let classe = "petcode";

    let paragrafo1 = "O PETCode é um projeto do PET C3 voltado à aplicação prática dos conhecimentos adquiridos durante a graduação, alinhando-se aos três pilares do Programa de Educação Tutorial: Ensino, Pesquisa e Extensão.";
    let paragrafo2 = "Dentro do PETCode, os alunos têm a oportunidade de se envolver em subprojetos como a criação de uma apostila técnica, a Oficina de Joomla, postagens educacionais sobre temas de computação e automação, e até na automação da sala do PET.";
    let paragrafo3 = "Outras iniciativas práticas incluem o desenvolvimento de um programa para facilitar o processo de criação de atas de reunião e o site oficial do PET C3.";
    let paragrafo4 = "O PETCode é uma excelente oportunidade para exercitar habilidades, aprender e colaborar em projetos inovadores.";

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
