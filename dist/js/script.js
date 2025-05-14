
        // Enhanced mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    // Toggle menu when buttons are clicked
    mobileMenuButton.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);

    // Close menu when overlay is clicked
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when any link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    function toggleMenu() {
    const menu = mobileMenu;
    const overlay = menuOverlay;
    const menuContent = menu.querySelector('div.bg-white');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        setTimeout(() => {
            overlay.classList.replace('bg-opacity-0', 'bg-opacity-50');
            menuContent.classList.replace('-translate-y-full', 'translate-y-0');
        }, 10);
    } else {
        overlay.classList.replace('bg-opacity-50', 'bg-opacity-0');
        menuContent.classList.replace('translate-y-0', '-translate-y-full');
        setTimeout(() => {
            menu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }, 300);
    }
}