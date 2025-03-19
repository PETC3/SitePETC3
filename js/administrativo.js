(function() {
    // Definindo as variáveis
    let titulo = "Administrativo";
    let descricao = "O projeto Administrativo do PET Ciências Computacionais promove a organização e a produtividade dos projetos do grupo, além de desenvolver as habilidades profissionais dos petianos por meio de reuniões, atividades e processos estratégicos. Ele atua como suporte para garantir o sucesso das iniciativas e a continuidade das atividades do programa.";
    let imagemURL = "../imagens/main/adm.png";
    let classe = "administrativo";

    let paragrafo1 = "O Administrativo do PET Ciências Computacionais é uma iniciativa voltada à organização, estratégia e desenvolvimento humano, que busca atender às demandas do grupo e maximizar os resultados de seus projetos. Focado no crescimento profissional dos petianos, o projeto realiza reuniões periódicas, organiza atas e processos autoavaliativos, elabora certificados e gerencia os processos de seleção de novos membros, promovendo integração e eficiência no grupo.";
    let paragrafo2 = "Além de impulsionar o desenvolvimento individual, o projeto desempenha um papel crucial na produtividade das iniciativas do PET. Um mapeamento anual é realizado para coletar informações detalhadas de cada projeto, o que permite identificar metas ainda não atingidas e desenvolver estratégias colaborativas para superá-las. Em 2024, foram introduzidas a documentação formal das iniciativas e a criação de manuais para eventos, facilitando a continuidade e servindo como referência para novos membros.";
    let paragrafo3 = "Essas ações estruturadas reforçam a capacidade do grupo de enfrentar desafios e garantir a continuidade de suas atividades. A introdução de manuais e práticas documentadas é parte de um esforço maior para preservar o conhecimento adquirido e assegurar que as transições de equipe sejam mais fluidas. Essa abordagem é especialmente relevante para novos petianos, que encontram no projeto de liderança um suporte essencial para sua integração.";
    let paragrafo4 = "Com uma abordagem de suporte estratégico, o projeto busca continuamente melhorar os processos e as iniciativas do PET Ciências Computacionais. Para 2025, espera-se alcançar novos níveis de desenvolvimento, consolidar as práticas implementadas e atuar na estabilização de iniciativas impactadas por eventos adversos, como as enchentes no estado do Rio Grande do Sul. Assim, o projeto se firma como um pilar indispensável para o sucesso e a evolução do grupo.";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoAdministrativo = function() {
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
