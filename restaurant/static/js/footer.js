// ===== SET CURRENT YEAR DYNAMICALLY =====
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('{{ year }}', currentYear);
}

// ===== SCROLL TO TOP ON LOGO CLICK =====
const footerLogo = document.querySelector('.footer-logo');
if (footerLogo) {
    footerLogo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}