// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.about, .memories, .letters, .playlist').forEach(section => {
    observer.observe(section);
});

// Add animation to gallery items on scroll
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
});

// Add animation to letter cards on scroll
const letterCards = document.querySelectorAll('.letter-card');
letterCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
});

// Add animation to song cards on scroll
const songCards = document.querySelectorAll('.song-card');
songCards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
});

// Mobile menu toggle (if needed for smaller screens)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-menu').style.display = 'flex';
    }
});