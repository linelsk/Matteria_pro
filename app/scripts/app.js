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
    //.constant('API_PATH', 'http://127.0.0.1:8001/')
    //.constant('API_PATH_MEDIA', 'http://127.0.0.1:8001/media/')
    .constant('API_PATH', 'http://174.138.51.31:8001/')
    .constant('API_PATH_MEDIA', 'http://174.138.51.31:8001/media/')
    .constant('url', window.location.pathname)
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {

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
                templateUrl: 'views/Productos.html',
                controller: 'ProductoCtrl'
            })
            .state('ensayo', {
                url: '/ensayo',
                templateUrl: 'views/Ensayos.html',
                controller: 'EnsayoCtrl'
            })
            .state('contacto', {
                url: '/contacto',
                templateUrl: 'views/contacto.html',
                controller: 'ContactoCtrl'
            })
            .state('save', {
                url: '/gracias',
                templateUrl: 'views/save.html',
                controller: 'ContactoCtrl'
            })
            .state('detalle', {
                url: '/detalle/:id',
                templateUrl: 'views/detalleproducto.html',
                controller: 'DetalleCtrl'
            })

        $qProvider.errorOnUnhandledRejections(false);
        $locationProvider.html5Mode(true);
        
    })
    .run(function ($rootScope, $location, $window, Carousel) {

        Carousel.setOptions({
            arrows: true,
            autoplay: false,
            cssEase: 'ease',
            dots: false,
            adaptiveHeight: true,
            fade: true,

            easing: 'linear',
            fade: false,
            infinite: true,
            initialSlide: 3,

            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
        });
    });
