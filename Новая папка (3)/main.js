// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.style.opacity = "1";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all cards and sections to animate
document.querySelectorAll('.glass, section h2, .grid > div').forEach(el => {
    el.style.opacity = "0";
    observer.observe(el);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('py-2');
        header.classList.remove('py-4');
        header.style.background = "rgba(15, 23, 42, 0.9)";
    } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
        header.style.background = "rgba(15, 23, 42, 0.7)";
    }
});

console.log('SMM Pro Website Loaded Successfully!');
