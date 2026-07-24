// ===== FADE IN ANIMATION =====
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
fadeElements.forEach(el => observer.observe(el));

// ===== FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// Input validation rules
const validators = {
    firstName: {
        element: document.getElementById('firstName'),
        error: document.getElementById('firstNameError'),
        validate: (val) => {
            if (!val.trim()) return 'First name is required';
            if (val.trim().length < 2) return 'Must be at least 2 characters';
            return '';
        }
    },
    lastName: {
        element: document.getElementById('lastName'),
        error: document.getElementById('lastNameError'),
        validate: (val) => {
            if (!val.trim()) return 'Last name is required';
            if (val.trim().length < 2) return 'Must be at least 2 characters';
            return '';
        }
    },
    email: {
        element: document.getElementById('email'),
        error: document.getElementById('emailError'),
        validate: (val) => {
            if (!val.trim()) return 'Email is required';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(val)) return 'Enter a valid email address';
            return '';
        }
    },
    subject: {
        element: document.getElementById('subject'),
        error: document.getElementById('subjectError'),
        validate: (val) => {
            if (!val) return 'Please select a subject';
            return '';
        }
    },
    message: {
        element: document.getElementById('message'),
        error: document.getElementById('messageError'),
        validate: (val) => {
            if (!val.trim()) return 'Message is required';
            if (val.trim().length < 10) return 'Message must be at least 10 characters';
            if (val.trim().length > 500) return 'Message cannot exceed 500 characters';
            return '';
        }
    }
};

// Validate single field
function validateField(key) {
    const { element, error, validate } = validators[key];
    const wrapper = element.closest('.input-wrapper');
    const errorMsg = validate(element.value);

    error.textContent = errorMsg;

    if (errorMsg) {
        wrapper.classList.add('error');
        wrapper.classList.remove('success');
    } else {
        wrapper.classList.remove('error');
        wrapper.classList.add('success');
    }

    return !errorMsg;
}

// Real-time validation
Object.keys(validators).forEach(key => {
    const { element } = validators[key];
    element.addEventListener('blur', () => validateField(key));
    element.addEventListener('input', () => {
        if (element.closest('.input-wrapper').classList.contains('error')) {
            validateField(key);
        }
    });
});

// Form Submit
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        Object.keys(validators).forEach(key => {
            if (!validateField(key)) isValid = false;
        });

        // Check agree checkbox
        const agree = document.getElementById('agree');
        const agreeError = document.getElementById('agreeError');
        if (!agree.checked) {
            agreeError.textContent = 'You must agree to the terms';
            isValid = false;
        } else {
            agreeError.textContent = '';
        }

        if (!isValid) return;

        // Show loading
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;

        // Submit form after delay (remove timeout in production)
        setTimeout(() => {
            contactForm.submit();
        }, 1000);
    });
}

// ===== CHARACTER COUNTER =====
const messageTextarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const maxChars = 500;

if (messageTextarea) {
    messageTextarea.addEventListener('input', () => {
        const count = messageTextarea.value.length;
        charCount.textContent = `${count} / ${maxChars}`;
        charCount.style.color = count > maxChars
            ? '#dc3545'
            : count > maxChars * 0.8
                ? '#ffc107'
                : '#aaaaaa';
    });
}

// ===== RESERVATION FIELDS TOGGLE =====
const subjectSelect = document.getElementById('subject');
const reservationFields = document.getElementById('reservationFields');

if (subjectSelect) {
    subjectSelect.addEventListener('change', () => {
        if (subjectSelect.value === 'reservation') {
            reservationFields.classList.add('active');
        } else {
            reservationFields.classList.remove('active');
        }
    });
}

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').classList.remove('open');
        });

        // Open clicked
        if (!isActive) {
            item.classList.add('active');
            answer.classList.add('open');
        }
    });
});

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMsg = document.getElementById('newsletterMsg');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            newsletterMsg.textContent = 'Please enter your email!';
            newsletterMsg.style.color = '#ff6b6b';
            return;
        }

        if (!emailRegex.test(email)) {
            newsletterMsg.textContent = 'Please enter a valid email!';
            newsletterMsg.style.color = '#ff6b6b';
            return;
        }

        newsletterMsg.textContent = '✓ Successfully subscribed!';
        newsletterMsg.style.color = '#28a745';
        newsletterEmail.value = '';

        setTimeout(() => {
            newsletterMsg.textContent = '';
        }, 3000);
    });
}

// ===== SET MIN DATE FOR RESERVATION =====
const reservationDate = document.getElementById('reservationDate');
if (reservationDate) {
    const today = new Date().toISOString().split('T')[0];
    reservationDate.setAttribute('min', today);
}