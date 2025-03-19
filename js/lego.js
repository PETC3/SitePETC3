(function() {
    // Definindo as variáveis
    let titulo = "Scratch";
    let descricao = "Ensinar lógica e pensamento computacional para jovens pode ser divertido! O Scratch nas Escolas leva o universo da programação e da lógica para alunos de escolas públicas em Rio Grande, criando bases sólidas para o futuro acadêmico e profissional. Saiba mais sobre essa iniciativa inspiradora!";
    let imagemURL = "../imagens/main/lego.png";
    let classe = "lego";

    let paragrafo1 = "O projeto Scratch nas Escolas é uma iniciativa voltada para despertar o raciocínio lógico e o pensamento computacional em alunos do ensino médio de escolas públicas no município de Rio Grande.";
    let paragrafo2 = "Através de encontros presenciais semanais, os estudantes aprendem os conceitos básicos de lógica por meio de fluxogramas e dão seus primeiros passos em programação com o Scratch.";
    let paragrafo3 = "O objetivo é oferecer uma introdução prática e interativa, preparando os jovens para o mundo da tecnologia e incentivando o desenvolvimento de habilidades essenciais para o século XXI.";
    let paragrafo4 = "O Scratch nas Escolas é um projeto derivado do LEGO nas Escolas, um dos projetos mais antigos do PET C3, ainda em atividade.";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoLego = function() {
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
