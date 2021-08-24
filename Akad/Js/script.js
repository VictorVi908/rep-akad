"use sctrict"

document.addEventListener('DOMContentLoaded', function() {

    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.header__menu');
    if (iconMenu) {
        iconMenu.addEventListener('click', function (e) {
            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('active');
            menuBody.classList.toggle('active');
        });
    }
    
    // Находим все элементы грид
    const gridsElements = document.querySelectorAll('.grid');
    
    // Преобразуем nodeList в обычный массив через spread оператор - [...gridsElements]
    // Создаем новый массив и преобразуем в нем дом элементы в масонри элементы
    // Получается у нас будет массив с масонри элементами и мы сможем вызывать масонри методы когда захотим. 
    // Через foreach так не получится, мы сможем один раз сынициализировать масонри, но дальше взаимодействовать не получится. Так как foreach не может изменить исходный массив
    const grids = [...gridsElements].map(grid => {
        return new Masonry(grid, {
            columnWidth: 262,
            itemSelector: '.grid-item'
        });
    })
    
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

            // После того как блок стал активным и браузер увидил его размер обновляем масонри
            // Берём нужный масонри из массива. (Кликнули по первому элементу - берем первый масонри и т.д)
            const currentGrid = grids[index];
            // Обновляем сетку (Метод масонри из документации)
            currentGrid.layout();
    
        })
    });

    $(function () {
    
        $('.reviews__slider').slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    
    });
    
})
