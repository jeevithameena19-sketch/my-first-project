document.addEventListener('DOMContentLoaded', () => {
    // Determine the current page for active link styling
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Navbar HTML
    const navbarHTML = `
        <nav class="navbar">
            <div class="container nav-container">
                <a href="index.html" class="logo text-gradient">Jeevitha K S.</a>
                <ul class="nav-links">
                    <li><a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">About</a></li>
                    <li><a href="education.html" class="${currentPath === 'education.html' ? 'active' : ''}">Education</a></li>
                    <li><a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact</a></li>
                </ul>
                <div class="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;

    // Footer HTML
    const footerHTML = `
        <footer>
            <div class="container">
                <p>&copy; ${new Date().getFullYear()} Jeevitha K S. All rights reserved.</p>
            </div>
        </footer>
    `;

    // Inject Navbar at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Inject Footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
        });
    }
});
