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
const galleryItems = document.querySelectorAll('.gallery-item');
const noResults = document.getElementById('noResults');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        let visibleCount = 0;

        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease';
                visibleCount++;
            } else {
                item.classList.add('hidden');
            }
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;
let visibleImages = [];

// Collect all zoom buttons
const zoomBtns = document.querySelectorAll('.gallery-zoom');

function openLightbox(index) {
    visibleImages = Array.from(
        document.querySelectorAll('.gallery-item:not(.hidden) .gallery-zoom')
    );
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightbox() {
    const btn = visibleImages[currentIndex];
    const src = btn.getAttribute('data-src');
    const title = btn.getAttribute('data-title');
    const category = btn.getAttribute('data-category');

    lightboxImg.style.opacity = '0';
    setTimeout(() => {
        lightboxImg.src = src;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightboxCategory.textContent = category;
        lightboxImg.style.opacity = '1';
    }, 200);
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Open on zoom click
zoomBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(index);
    });
});

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);

// Navigation
lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + visibleImages.length) 
                   % visibleImages.length;
    updateLightbox();
});

lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % visibleImages.length;
    updateLightbox();
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + visibleImages.length) 
                       % visibleImages.length;
        updateLightbox();
    }
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % visibleImages.length;
        updateLightbox();
    }
});

// Touch Swipe Support
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        currentIndex = (currentIndex + 1) % visibleImages.length;
        updateLightbox();
    }
    if (touchEndX - touchStartX > 50) {
        currentIndex = (currentIndex - 1 + visibleImages.length) 
                       % visibleImages.length;
        updateLightbox();
    }
});

// ===== LOAD MORE BUTTON =====
const loadMoreBtn = document.getElementById('loadMoreBtn');
const itemsPerLoad = 4;
let hiddenItems = [];

function initLoadMore() {
    const allItems = document.querySelectorAll('.gallery-item');
    if (allItems.length > itemsPerLoad) {
        hiddenItems = Array.from(allItems).slice(itemsPerLoad);
        hiddenItems.forEach(item => {
            item.style.display = 'none';
        });
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

loadMoreBtn.addEventListener('click', () => {
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    loadMoreBtn.classList.add('loading');

    setTimeout(() => {
        const nextItems = hiddenItems.splice(0, itemsPerLoad);
        nextItems.forEach(item => {
            item.style.display = 'block';
            item.classList.add('visible');
        });

        loadMoreBtn.classList.remove('loading');
        loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More';

        if (hiddenItems.length === 0) {
            loadMoreBtn.style.display = 'none';
        }
    }, 800);
});

initLoadMore();

// ===== GALLERY ITEM CLICK =====
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});