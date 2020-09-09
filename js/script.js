window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu_item'),
    hamburger = document.querySelector('.header_hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header_hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header_hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})