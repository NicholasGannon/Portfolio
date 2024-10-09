const initApp = () => {
    // DOM elements
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const navigationLinks = document.querySelectorAll('.navigation-links');

    // Menu state
    let isMenuOpen = false;

    // Toggle menu function
    const toggleMenu = () => {
        isMenuOpen ? closeMenu() : openMenu();
        isMenuOpen = !isMenuOpen;
    };

    // Open menu
    const openMenu = () => {
        mobileMenu.classList.remove('hidden', 'animate-close-menu');
        mobileMenu.classList.add('block', 'animate-open-menu');
    };

    // Close menu
    const closeMenu = () => {
        mobileMenu.classList.remove('animate-open-menu');
        mobileMenu.classList.add('animate-close-menu');

        mobileMenu.addEventListener('animationend', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('block');
        }, { once: true });
    };

    // Event listeners
    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    navigationLinks.forEach(link => link.addEventListener('click', toggleMenu));
};

document.addEventListener('DOMContentLoaded', initApp);

// Lenis scrolling
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
