const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const topBar = document.getElementById('top-bar');
    const bottomBar = document.getElementById('bottom-bar');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        topBar.classList.toggle('rotate-45');
        topBar.classList.toggle('mb-[6px]');
        bottomBar.classList.toggle('-rotate-45');
        bottomBar.classList.toggle('mt-[6px]');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);