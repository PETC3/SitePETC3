window.efeitos = ScrollReveal({ reset: false });

efeitos.reveal('.efeito', {
    duration: 2000,
    distance: '90px',
});

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.image-container');

    containers.forEach(container => {
        container.addEventListener('click', () => {
            // Remove a classe "active" de todas as imagens
            containers.forEach(c => c.classList.remove('active'));

            // Adiciona a classe "active" à imagem clicada
            container.classList.add('active');
        });
    });

    // Remove a classe "active" ao tocar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.image-container')) {
            containers.forEach(container => container.classList.remove('active'));
        }
    });
});
