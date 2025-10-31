document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    function enableDarkMode() {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }

    const isDarkModePreferred = localStorage.getItem('darkMode') === 'enabled' || 
                               (localStorage.getItem('darkMode') === null && 
                                window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkModePreferred) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = {};

    navLinks.forEach(link => {
        const targetId = link.getAttribute('data-target'); 
        const section = document.getElementById(targetId); 
        if (section) {
            sections[targetId] = section;
        }
    });

    function scrollSpy() {
        const scrollPosition = window.scrollY + 100; 
        let currentSectionId = '';

        for (const id in sections) {
            const section = sections[id];
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                currentSectionId = id;
                break; 
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);
    scrollSpy(); 
});