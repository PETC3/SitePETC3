(function() {
    // Definindo as variáveis
    let titulo = "The Bytleas";
    let descricao = "O Projeto The Bytleas é uma iniciativa do PET C3 com o objetivo de solidificar o conhecimento adquirido pelos alunos na disciplina de Algoritmos e Estruturas de Dados I, preenchendo possíveis lacunas de aprendizado e contribuindo para a comunidade do C3, baseando-se nos pilares de Ensino e Pesquisa.";
    let imagemURL = "../imagens/main/bytleas.png";
    let classe = "bytleas";

    let paragrafo1 = "Com um foco voltado para a prática e a colaboração, o Projeto The Bytleas busca melhorar o desempenho acadêmico dos participantes, além de aumentar o interesse pela área e promover o pertencimento à comunidade acadêmica do Centro de Ciências Computacionais. O objetivo é solidificar o conhecimento adquirido pelos alunos na disciplina de Algoritmos e Estruturas de Dados I, preenchendo possíveis lacunas de aprendizado e contribuindo para a redução das taxas de reprovação nesta cadeira.";
    let paragrafo2 = "As atividades serão realizadas de forma presencial, com encontros quinzenais ao longo do ano. Cada encontro será estruturado com material visual (como slides e vídeos explicativos) e listas de exercícios cooperativas, onde os alunos poderão trabalhar em grupo para resolver problemas práticos e reforçar os conceitos de algoritmos e estrutura de dados. A metodologia será baseada no ensino ativo, com ênfase na resolução de problemas e na troca de conhecimentos entre os participantes, estimulando a colaboração e o aprendizado conjunto.";
    let paragrafo3 = "O projeto é destinado aos alunos dos cursos de Engenharia de Automação, Engenharia de Computação e Sistemas de Informação que sentem a necessidade de reforçar seu conhecimento na disciplina ou que desejam melhorar seu desempenho acadêmico, mas também estão motivados a participar de um ambiente colaborativo. Não há um pré-requisito formal, exceto o interesse genuíno em aprender e em contribuir com o grupo.";
    let paragrafo4 = "A duração do projeto será anual, com uma série de encontros e atividades ao longo de 12 meses. O desempenho do projeto será avaliado com base nas médias de notas dos alunos das turmas que participarem do projeto, comparando os resultados das turmas anteriores e posteriores à implementação do The Bytleas. Além disso, será realizada uma avaliação contínua da satisfação e do engajamento dos participantes, por meio de feedbacks regulares. Os principais resultados esperados são o aumento do desempenho acadêmico, a diminuição das taxas de reprovação na disciplina e o fortalecimento do interesse pela área de algoritmos e programação.";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoBytleas = function() {
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
