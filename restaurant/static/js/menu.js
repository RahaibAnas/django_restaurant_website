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

// ===== FILTER BUTTONS =====
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');
const noResults = document.getElementById('noResults');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        let visibleCount = 0;

        menuCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Show no results
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
});

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.getElementById('menuSearch');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    menuCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();

        if (name.includes(searchTerm) || desc.includes(searchTerm)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
});

// ===== CART FUNCTIONALITY =====
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartFloatBtn = document.getElementById('cartFloatBtn');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const totalPriceEl = document.getElementById('totalPrice');

let cart = [];

// Open Cart
cartFloatBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
});

// Close Cart
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
}

// Add to Cart
const addToCartBtns = document.querySelectorAll('.add-to-cart');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.menu-card');
        const name = card.querySelector('h3').textContent;
        const price = parseFloat(
            card.querySelector('.price').textContent.replace('$', '')
        );
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCart();
    showCartNotification(name);
}

function updateCart() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = totalItems;

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    totalPriceEl.textContent = `$${total.toFixed(2)}`;

    // Render items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">
                        $${(item.price * item.qty).toFixed(2)}
                    </span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="qty-number">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-item" onclick="removeItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function changeQty(index, change) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// ===== CART NOTIFICATION =====
function showCartNotification(name) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background-color: #1a1a1a;
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 14px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        border-left: 4px solid #ff6b35;
    `;
    notification.textContent = `✓ ${name} added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2500);
}

// ===== QUICK VIEW MODAL =====
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

const quickViewBtns = document.querySelectorAll('.quick-view-btn');
quickViewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.menu-card');
        const name = card.querySelector('h3').textContent;
        const desc = card.querySelector('p').textContent;
        const price = card.querySelector('.price').textContent;
        const category = card.querySelector('.menu-category').textContent;

        modalContent.innerHTML = `
            <h2>${name}</h2>
            <span class="modal-category">${category}</span>
            <p class="modal-desc">${desc}</p>
            <div class="modal-price">${price}</div>
            <button class="modal-add-btn" onclick="addToCartFromModal('${name}', 
                ${parseFloat(price.replace('$', ''))})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        `;
        modalOverlay.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

function addToCartFromModal(name, price) {
    addToCart(name, price);
    modalOverlay.classList.remove('active');
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
}

// ===== KEYBOARD CLOSE MODAL =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalOverlay.classList.remove('active');
        closeCart();
    }
});