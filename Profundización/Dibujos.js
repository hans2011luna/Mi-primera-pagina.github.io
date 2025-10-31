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

    // Listener para el botón
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    const modalHTML = `
        <div id="imageModal" class="modal">
            <span class="close-btn">&times;</span>
            <img class="modal-content" id="modalImage">
        </div>
    `;
    body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const galleryItems = document.querySelectorAll('.gallery li');

    function openModal(imageSrc) {
        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const image = item.querySelector('img');
            if (image) {
                openModal(image.src);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);


    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});