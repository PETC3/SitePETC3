(function() {
    // Definindo as variáveis
    let titulo = "PET de Ciências Computacionais";
    let descricao = "O PET Ciências Computacionais é um grupo que faz parte do Programa de Educação Tutorial. O grupo atualmente é formado por 18 graduandos, dos cursos de Engenharia de Automação, Engenharia de Computação e Sistema de Informação, da Universidade Federal do Rio Grande, e por um professor tutor.";
    let imagemURL = "../imagens/main/logo_pet_colorida.png";
    let classe = "";

    let paragrafo1 = "Criado em 1979 pela CAPES com o nome Programa Especial de Treinamento – PET, este programa foi transferido no final de 1999 para a Secretaria de Educação Superior do Ministério da Educação. Em 2004 o PET passou a ser identificado como Programa de Educação Tutorial.";
    let paragrafo2 = "O PET é desenvolvido por grupos de estudantes, com tutoria de um docente, organizados a partir de cursos de graduação das Instituições de Ensino Superior do país, sendo um grupo por curso, orientados pelo princípio da indissociabilidade entre ensino, pesquisa e extensão e da educação tutorial.";
    let paragrafo3 = "O PET, ao desenvolver ações de ensino, pesquisa e extensão, de maneira articulada, permite uma formação global, tanto do aluno bolsista quanto dos demais alunos do curso, proporcionando-lhes uma compreensão mais integral do que ocorre consigo mesmo e no mundo. Ao mesmo tempo a multiplicidade de experiências contribui para reduzir os riscos de uma especialização precoce.";
    let paragrafo4 = "Conheça mais sobre o PET C3 nas páginas de projeto ou no nosso Instagram @petc3furg";

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
