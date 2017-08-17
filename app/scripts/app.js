'use strict';

/**
 * @ngdoc overview
 * @name spraytecApp
 * @description
 * # spraytecApp
 *
 * Main module of the application.
 */
angular
    .module('spraytecApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ngMaterial',
        'ui.carousel',
        'ui.router',
        'vAccordion',
    ])
    .constant('API_PATH', 'http://127.0.0.1:8001/')
    .constant('API_PATH_MEDIA', 'http://127.0.0.1:8001/')
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .state('producto', {
                url: '/producto',
                templateUrl: 'views/productos.html',
                controller: 'ProductoCtrl'
            })
            .state('ensayo', {
                url: '/ensayo',
                templateUrl: 'views/ensayos.html',
                controller: 'EnsayoCtrl'
            })
            .state('contacto', {
                url: '/contacto',
                templateUrl: 'views/contacto.html',
                controller: 'ContactoCtrl'
            })
    })
    .run(function ($rootScope, $location, $window, Carousel) {

        Carousel.setOptions({
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'ease',
            dots: false,
            adaptiveHeight: true,
            fade: true,

            easing: 'linear',
            fade: false,
            infinite: true,
            initialSlide: 0,

            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
        });
    });
