(function() {
    // Definindo as variáveis
    let titulo = "PET de Ciências Computacionais";
    let descricao = "O PET Ciências Computacionais é um grupo que faz parte do Programa de Educação Tutorial. O grupo atualmente é formado por 18 graduandos, dos cursos de Engenharia de Automação, Engenharia de Computação e Sistema de Informação, da Universidade Federal do Rio Grande, e por um professor tutor.";
    let imagemURL = "../imagens/main/logo_pet_branca.png";
    let classe = "";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoPet = function() {
        setTimeout(() => {
            document.getElementById('titulo').textContent = titulo;
            document.getElementById('descricao').textContent = descricao;
            document.getElementById('logobola').src = imagemURL;
            document.getElementById('classeprojeto').className = classe;
        }, 300); // 700ms de atraso
    };
})();
