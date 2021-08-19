"use sctrict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');

    });
}


//ТАБЫ

document.querySelectorAll('.menu__list-li').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const id = e.target.getAttribute('href').replace("#", '');

        document.querySelectorAll('.menu__list-li').forEach((child) => (
            child.classList.remove('menu__list-li--picked')
        ));

        document.querySelectorAll('.grid__tabs-block').forEach((child) => (
            child.classList.remove('grid__tabs-block--active')
        
        ));

item.classList.add('menu__list-li--picked');
document.getElementById(id).classList.add('grid__tabs-block--active');
    })
);

document.querySelector('.menu__list-li').click();