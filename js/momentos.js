(function() {
    // Definindo as variáveis
    let titulo = "Momentos PETs";
    let descricao = "A iniciativa de mídia do PET C3, o Momento PETs, traz histórias, dicas de carreira e muito conhecimento para os estudantes de Computação da FURG. Desde experiências de alunos até entrevistas com professores e curiosidades sobre a área, o projeto aproxima você da prática acadêmica e do mercado de tecnologia. Conheça mais!";
    let imagemURL = "../imagens/main/momentos.png";
    let classe = "momentos";

    let paragrafo1 = "O Momento PETs é o projeto de mídia do PET C3 que aproxima os estudantes de Computação da FURG do universo acadêmico e do mercado de tecnologia por meio de conteúdos informativos e inspiradores. Dentro dele, encontramos diversas frentes:";
    let paragrafo2 = "Experiências no C3: Focado em entrevistas com alunos próximos à graduação, compartilha histórias sobre como vivências acadêmicas ajudaram a moldar suas carreiras.";
    let paragrafo3 = "Divulga C3: Divulga os principais projetos científicos em andamento, destacando informações sobre bolsas, vagas e professores coordenadores, incentivando o engajamento na pesquisa.  ";
    let paragrafo4 = "Momento Curiosidades: Traz vídeos curtos no YouTube com pílulas de conhecimento sobre o vasto universo das ciências exatas. PET-à-Tête-Cast: Um podcast em formato de entrevistas com professores e técnicos do C3, que narram suas trajetórias acadêmicas, profissionais e pessoais, incentivando estudantes com histórias de sucesso.";
    
    // Função para atualizar o conteúdo com delay
    window.carregarConteudoMomentos = function() {
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
