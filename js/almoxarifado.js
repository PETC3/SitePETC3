(function() {
    // Definindo as variáveis
    let titulo = "Almoxarifado";
    let descricao = "O projeto Almoxarifado organiza e monitora materiais essenciais do PET Ciências Computacionais, distinguindo itens de estoque e materiais patrimoniais. Acompanhe o desenvolvimento desta iniciativa e saiba como estamos criando um sistema de controle que otimiza o uso e a preservação dos recursos do grupo!";
    let imagemURL = "../imagens/main/almoxarifado.png";
    let classe = "almoxarifado";

    let paragrafo1 = "O Almoxarifado foi criado para solucionar a necessidade de organização e controle dos materiais do PET Ciências Computacionais, prevenindo perdas e melhorando o gerenciamento de recursos.";
    let paragrafo2 = "O projeto, ainda em desenvolvimento, classifica os materiais em duas categorias principais: patrimoniais e não-patrimoniais.";
    let paragrafo3 = "Materiais não-patrimoniais são itens de estoque, que estão disponíveis sem a necessidade de solicitação formal, enquanto os patrimoniais requerem um processo de empréstimo.";
    let paragrafo4 = "A próxima etapa envolve a criação de uma aplicação que permitirá o controle e o acesso facilitado ao almoxarifado, otimizando o processo de empréstimo. Esse sistema será exclusivo para os membros do PET C3, com até 16 usuários comuns e 2 administradores, promovendo um uso mais eficiente e seguro dos materiais do grupo.";

    // Função para atualizar o conteúdo com delay
    window.carregarConteudoAlmoxarifado = function() {
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
