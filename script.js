const sidebar = document.getElementById('sidebar');

const humbergerMenu = document.getElementById('hamburger-menu');
const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

humbergerMenu.addEventListener('click' , () => {
    sidebar.style.transform = 'translateX(0px)';
})
sidebarCloseBtn.addEventListener('click' , () => {
    sidebar.style.transform = 'translateX(-250px)';
})