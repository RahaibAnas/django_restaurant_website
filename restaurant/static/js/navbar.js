// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ===== CLOSE MENU ON LINK CLICK =====
const navLinks = document.querySelectorAll('.navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
    });
});