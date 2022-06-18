const menuButton = document.getElementsByClassName('menu-icon')[0]
const navigationLinks = document.getElementsByClassName('navigation')[0]



menuButton.addEventListener('click', () => {
    navigationLinks.classList.toggle('active')
    menuButton.classList.toggle('open');

})