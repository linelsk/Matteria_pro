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
        'ngTouch',
        'ui.carousel',
        'ui.router',
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
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
