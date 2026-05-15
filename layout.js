document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Background Effects
    const bgHTML = `
        <div class="bg-grid"></div>
        <div class="bg-orbs">
            <div class="bg-orb"></div>
            <div class="bg-orb"></div>
            <div class="bg-orb"></div>
        </div>
    `;

    // Navbar HTML
    const navbarHTML = `
        <nav class="navbar" id="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">Meenakumari.</a>
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">About</a></li>
                    <li><a href="projects.html" class="${currentPath === 'projects.html' ? 'active' : ''}">Projects</a></li>
                    <li><a href="education.html" class="${currentPath === 'education.html' ? 'active' : ''}">Education</a></li>
                    <li><a href="certifications.html" class="${currentPath === 'certifications.html' ? 'active' : ''}">Certifications</a></li>
                    <li><a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact</a></li>
                    <li><a href="meena123.docx" download class="nav-resume-btn">📄 Resume</a></li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;

    // Footer HTML
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="index.html" class="logo">Meenakumari.</a>
                    <p>Building the future, one line at a time.</p>
                </div>
                <div class="footer-links">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="projects.html">Projects</a>
                    <a href="education.html">Education</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div class="footer-social">
                    <a href="mailto:kumarimeena09251@gmail.com" title="Email" aria-label="Email">✉</a>
                    <a href="tel:+918431551043" title="Phone" aria-label="Phone">📞</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© ${new Date().getFullYear()} Meenakumari B.M — Crafted with <span class="heart">♥</span></p>
            </div>
        </footer>
    `;

    // Inject elements
    document.body.insertAdjacentHTML('afterbegin', bgHTML + navbarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Scroll animations (Intersection Observer)
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // Smooth page transition
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
});
