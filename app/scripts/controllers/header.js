'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('HeaderCtrl', ['$scope', 'contenidoFactory', '$window', function ($scope, contenidoFactory, $window) {

        $scope.menuHeader = [{}];
        $scope.idiomaLocal = "es_AR";
        $window.localStorage.idioma == $scope.idiomaLocal;

        $scope.changeLanguage = function (key) {
            //console.log(key);
            $window.localStorage.idioma = key;
        };

        $scope.calcular = function () {
            switch ($window.localStorage.idioma) {
                case 'en_US':
                    $scope.idiomaLocal = 'en_US';                    
                    break;
                case 'es_AR':
                    $scope.idiomaLocal = 'es_AR';
                    break;
                case 'es_BR':
                    $scope.idiomaLocal = 'es_BR';
                    break;

                default:                    
            }
            $scope.menuHeader = $scope.menuHeader;
        }

        $scope.$watch($scope.calcular);

        contenidoFactory.ServiceContenido('manager/ImagenMenu/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data[0].image);
            $scope.imageHeader = data.data[0].image
        });

        contenidoFactory.ServiceContenido('manager/Menu/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data[0]);
            $scope.menuHeader = data.data[0]
        });

    }]);