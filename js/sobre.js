document.addEventListener("DOMContentLoaded", () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
    
        timelineEvents.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            const eventHeight = event.offsetHeight;
    
            if (eventTop < windowHeight && eventTop + eventHeight > 0) {
                event.classList.add('revealed');
                console.log('Evento visível:', event); // Teste aqui
            }
        });
    };
})    