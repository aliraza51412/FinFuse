const sidebar = document.getElementById('sidebar');

const humbergerMenu = document.getElementById('hamburger-menu');
const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

humbergerMenu.addEventListener('click' , () => {
    sidebar.style.transform = 'translateX(0px)';
})
sidebarCloseBtn.addEventListener('click' , () => {
    sidebar.style.transform = 'translateX(-250px)';
})

// NAVBAR SCROLL
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector('#navbar');
        if (window.scrollY > 60) {
            navbar.classList.add('navbar_scroll');
        } else {
            navbar.classList.remove('navbar_scroll');
        }
    });
});