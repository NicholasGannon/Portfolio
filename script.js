const initApp = () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const navigationLinks = document.getElementsByClassName('navigation-links');

    let isMenuOpen = false;

    const toggleMenu = () => {
        if (isMenuOpen) {
            // Apply close animation
            mobileMenu.classList.remove('animate-open-menu');
            mobileMenu.classList.add('animate-close-menu');
            // Wait for close animation to finish before hiding
            mobileMenu.addEventListener('animationend', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('block');
            }, { once: true });
        } else {
            // Show the menu with open animation
            mobileMenu.classList.remove('hidden', 'animate-close-menu');
            mobileMenu.classList.add('block', 'animate-open-menu');
        }

        // Toggle menu state
        isMenuOpen = !isMenuOpen;
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    navigationLinks[0].addEventListener('click', toggleMenu);
    navigationLinks[1].addEventListener('click', toggleMenu);
    navigationLinks[2].addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)