// ===== SHARED JAVASCRIPT FOR ALL PAGES =====

// Initialize navigation
function initNavigation() {
    const nav = document.querySelector('nav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const isOpen = mobileMenu.classList.contains('active');
            mobileMenuBtn.innerHTML = isOpen ?
                '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' :
                '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'home.html')) {
            link.classList.add('active');
        }
    });
}

// Create and insert navigation HTML
function createNavigation() {
    const navHTML = `
        <nav>
            <div class="container nav-container">
                <a href="home.html" class="logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span class="gradient-text">Divyanshu</span>
                </a>
                
                <div class="nav-links">
                    <a href="home.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="projects.html">Projects</a>
                    <a href="contact.html">Contact</a>
                    <a href="contact.html" class="btn btn-primary">Get in Touch</a>
                </div>
                
                <button class="mobile-menu-btn">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                
                <div class="mobile-menu">
                    <a href="home.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="projects.html">Projects</a>
                    <a href="contact.html">Contact</a>
                    <a href="contact.html" class="btn btn-primary">Get in Touch</a>
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// Create and insert footer HTML
function createFooter() {
    const footerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <p>&copy; ${new Date().getFullYear()} Divyanshu Tripathi. All rights reserved.</p>
                    <p style="font-size: 0.875rem;">
                        Built with <span class="heart">❤</span> using HTML, CSS & JavaScript
                    </p>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .contact-info, .contact-form-wrapper, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createNavigation();
    createFooter();
    initNavigation();
    initScrollAnimations();
});

// Smooth scroll for anchor links (if any)
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
