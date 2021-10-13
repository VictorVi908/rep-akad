"use sctrict"

document.addEventListener('DOMContentLoaded', function () {
    

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



})
