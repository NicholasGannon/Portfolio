const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const topBar = document.getElementById('top-bar');
    const bottomBar = document.getElementById('bottom-bar');

    let isMenuOpen = false;

    const toggleMenu = () => {
        if (isMenuOpen) {
            // Apply close animation
            mobileMenu.classList.remove('animate-open-menu');
            mobileMenu.classList.add('animate-close-menu');
            // Wait for close animation to finish before hiding
            mobileMenu.addEventListener('animationend', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }, { once: true });
        } else {
            // Show the menu with open animation
            mobileMenu.classList.remove('hidden', 'animate-close-menu');
            mobileMenu.classList.add('flex', 'animate-open-menu');
        }

        // Toggle the hamburger button animation
        topBar.classList.toggle('rotate-45');
        topBar.classList.toggle('mb-[6px]');
        bottomBar.classList.toggle('-rotate-45');
        bottomBar.classList.toggle('mt-[6px]');

        // Toggle menu state
        isMenuOpen = !isMenuOpen;
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);
