'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('DetalleCtrl', ['$scope', '$stateParams', 'contenidoFactory', 'API_PATH_MEDIA', function ($scope, $stateParams, contenidoFactory, API_PATH_MEDIA) {
        
        document.body.style.height = "auto";
        document.body.scrollTop = 0;
        $scope.API_PATH_MEDIA = API_PATH_MEDIA;

        contenidoFactory.ServiceContenido('catalogos/ProductoUpdate/' + $stateParams.id + '/', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.producto= data.data;

        });

        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: 'http://lorempixel.com/400/200/'
            },
            {
                image: 'http://lorempixel.com/400/200/food'
            },
            {
                image: 'http://lorempixel.com/400/200/sports'
            },
            {
                image: 'http://lorempixel.com/400/200/people'
            }
        ];
    }]);