function animarBienvenida() {
    const bodyContent = document.querySelector('body');
    bodyContent.style.opacity = '0';

    setTimeout(() => {
        const h1 = document.querySelector('h1');
        if (h1) {
            h1.style.opacity = '0';
            h1.style.transform = 'translateY(-20px)';
            h1.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            
            setTimeout(() => {
                h1.style.opacity = '1';
                h1.style.transform = 'translateY(0)';
            }, 100);
        }

        bodyContent.style.opacity = '1';
        bodyContent.style.transition = 'opacity 1s ease-out 0.5s';

    }, 50); 
}

function configurarModoOscuro() {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');

        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkModePreference', isDarkMode);


        toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
    }

    const savedPreference = localStorage.getItem('darkModePreference');
    if (savedPreference === 'true') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }

    toggleButton.addEventListener('click', toggleDarkMode);
}


document.addEventListener('DOMContentLoaded', () => {
    configurarModoOscuro();
    animarBienvenida();

    
});
