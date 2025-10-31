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
    
    const animeDescriptions = document.querySelectorAll('.anime-card p');

    animeDescriptions.forEach(description => {
       
        if (description.scrollHeight > description.clientHeight) {
            description.style.cursor = 'pointer'; 

            description.addEventListener('click', () => {
                description.classList.toggle('expanded');
            });
            
            const hint = document.createElement('span');
            hint.textContent = ' (Haz clic para ver más/menos)';
            hint.style.fontSize = '0.9em';
            hint.style.color = 'var(--primary-color)';
            description.appendChild(hint);
        }
    });

});