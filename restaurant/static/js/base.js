// ===================================
//  BASE JS - GLOBAL SCRIPTS
// ===================================

// ===== PAGE LOADER =====
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }, 800);
    }
});

// Prevent scroll while loading
document.body.classList.add('no-scroll');

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== AUTO DISMISS MESSAGES =====
const messageAlerts = document.querySelectorAll('.message-alert');
messageAlerts.forEach(alert => {
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(50px)';
        alert.style.transition = 'all 0.4s ease';
        setTimeout(() => alert.remove(), 400);
    }, 5000);
});

// ===== GLOBAL FADE IN OBSERVER =====
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const navLinks = document.querySelectorAll('.navbar ul li a');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

// ===== LAZY LOAD IMAGES =====
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===== TOOLTIP INIT =====
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(el => {
    el.addEventListener('mouseenter', () => {
        const tip = document.createElement('div');
        tip.className = 'tooltip-box';
        tip.textContent = el.getAttribute('data-tooltip');
        tip.style.cssText = `
            position: absolute;
            background: #1a1a1a;
            color: #fff;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 13px;
            z-index: 9999;
            pointer-events: none;
            white-space: nowrap;
        `;
        document.body.appendChild(tip);

        const rect = el.getBoundingClientRect();
        tip.style.top = rect.top - tip.offsetHeight - 8 + 'px';
        tip.style.left = rect.left + (rect.width / 2) 
                         - (tip.offsetWidth / 2) + 'px';

        el._tooltip = tip;
    });

    el.addEventListener('mouseleave', () => {
        if (el._tooltip) {
            el._tooltip.remove();
            el._tooltip = null;
        }
    });
});

// ===== KEYBOARD ACCESSIBILITY =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});