"use sctrict"

document.addEventListener('DOMContentLoaded', function () {

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
    document.querySelectorAll('.menu__list-li').forEach((item, index, arr) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            if (e.target.getAttribute('href')) {
                const id = e.target.getAttribute('href').replace("#", '');

                document.querySelectorAll('.menu__list-li').forEach((child) => (
                    child.classList.remove('menu__list-li--picked')
                ));

                document.querySelectorAll('.grid__tabs-block').forEach((child) => (
                    child.classList.remove('grid__tabs-block--active')
                ));


                item.classList.add('menu__list-li--picked');
                document.getElementById(id).classList.add('grid__tabs-block--active');
            }

        })
    });


    // let trigger = document.getElementsByClassName("aside__name");
    // let i;


    // for (i = 0; i < trigger.length; i++) {
    //     trigger[i].addEventListener('click', function () {
    //         this.classList.toggle('active');
    //         let panel = this.nextElementSibling;
    //         if (this.classList.contains('active')) {
    //             panel.style.display = 'block';
    //         } else {
    //             // panel.style.display = 'none';
    //             panel.style.display = '';
    //         }

    //     });
    // }

    const trigger = document.querySelector('.aside__name');
    let isInit = false;
    // Инит служит тем, чтобы не вешать 2 одинаковых обработчика на клик, 
    //то есть если мы загрузились на телефоне, то инициализируемся. 
    //Или если мы на ПК то ничего не делаем, потом когда скролим если впадаем в зону мобилок, инициализируемся там.

    if (window.innerWidth <= 830) {
        trigger.addEventListener('click', function () {
            trigger.closest('.aside').classList.toggle('active'); // Находим батю тайтла по селектору .box
        })
        isInit = true;
    }

    window.addEventListener('resize', function () {

        if (window.innerWidth <= 830 && !isInit) {
            trigger.addEventListener('click', function () {
                trigger.closest('.aside').classList.toggle('active'); // Находим батю тайтла по селектору .box
            })
            isInit = true;
        }

        // Дополнительно, если хочешь чтобы контент автоматически закрывался. 
        //Тоесть загрузился на мобилке - открыл меню, если ресайзнешь до ПК и потом опять на мобилку 
        //аккордион будет по умолчанию открыт. А так если ты ресайзишь с мобилки на ПК он полюбому закроется 
        //и когда ты будешь ресайзить обратно он будет закрыт.
        if (window.innerWidth > 830 && isInit) {
            trigger.closest('.aside').classList.remove('active');
        }
    })



})
