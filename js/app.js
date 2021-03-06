"use strict";

(function() {
  var pageHeader = document.querySelector('.page-header');
  var pageHeaderTop = document.querySelector(".page-header__top");
  var pageHeaderTopContainer = document.querySelector('.page-header__top-container');
  var pageHeaderContainer = document.querySelector('.page-header__container');
  var menu = document.querySelector(".menu");
  var menuButton = document.querySelector(".page-header__button");

  var onStart = function() {
    pageHeaderTop.classList.remove("page-header__top--no-js");
    menu.classList.remove("menu--no-js");
    pageHeader.classList.remove('page-header--no-js');
    pageHeaderTopContainer.classList.remove('page-header__top-container--no-js');
    pageHeaderContainer.classList.remove('page-header__container--no-js');
  }

  var checkButton = function() {
    pageHeaderTop.classList.toggle("page-header__top--menu-open");
    menu.classList.toggle("menu--open");
    menuButton.classList.toggle("page-header__button--menu-open");
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
