// Menú hamburguesa (móvil/tablet)
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const navLinks = document.querySelectorAll('.sidebar a');

function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
}
if (overlay) {
    overlay.addEventListener('click', toggleMenu);
}

// Cierra el menú al hacer clic en cualquier enlace (en móvil)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (sidebar.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Resalta en el menú la página en la que está el usuario
(function marcarEnlaceActivo() {
    const rutaActual = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links > li > a, .submenu a').forEach(link => {
        const href = link.getAttribute('href') || '';
        const archivoDelLink = href.split('#')[0];
        if (archivoDelLink === rutaActual) {
            link.classList.add('active');
        }
    });
})();
