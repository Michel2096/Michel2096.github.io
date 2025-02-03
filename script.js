document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.3 // El elemento debe estar al menos 30% visible para activar la animación
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});