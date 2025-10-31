document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const body = document.body;

    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeIcon.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeIcon.textContent = '☀️'; 
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeIcon.textContent = '🌙'; 
        }
    });
    
    const projectCards = document.querySelectorAll('.projects article');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s, background-color 0.3s';
        observer.observe(card);
    });
});