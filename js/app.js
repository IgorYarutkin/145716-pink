"use strict";

(function() {
  var pageHeaderTop = document.querySelector(".page-header__top");
  var menu = document.querySelector(".menu");
  var menuButton = document.querySelector(".page-header__button");

  var onStart = function() {
    pageHeaderTop.classList.remove("page-header__top--no-js");
    menu.classList.remove("menu--no-js");
  }

  var checkButton = function() {
    pageHeaderTop.classList.toggle("page-header__top--menu-open");
    menu.classList.toggle("menu--open");
  }

  onStart();
  menuButton.addEventListener("click", checkButton);

})();

// Подключение карты

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938878, 30.323097],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'PINK',
            balloonContent: 'PINK'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon-map-marker.svg',
            // Размеры метки.
            iconImageSize: [36, 36],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, 0]
        });

    myMap.geoObjects.add(myPlacemark);
});
