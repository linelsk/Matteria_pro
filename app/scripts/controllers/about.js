'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('AboutCtrl', ['$scope', '$window', 'contenidoFactory', function ($scope, $window, contenidoFactory) {
        $scope.about = {};
        $scope.mision = true;
        $scope.vision = true;
        $scope.valores = true;

        $scope.about.mision = "Misión";
        $scope.about.vision = "Visión";
        $scope.about.valores = "Valores";

        $scope.idiomaLocal;
        //$window.localStorage.idioma == $scope.idiomaLocal;

        $scope.calcular = function () {
            //console.log($window.localStorage.idioma);
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
            //$scope.sliderVideo = $scope.sliderVideo;
            //$scope.sliderTexto = $scope.sliderTexto;
        }

        $scope.$watch($scope.calcular);

        contenidoFactory.ServiceContenido('manager/Seccion_Acerca/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.acerca = data.data;
        });

        $scope.changemisionin = function () {
            $scope.mision = false
            $scope.about.mision = "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi.";
        };

        $scope.changemisionout = function () {
            $scope.mision = true;

            $scope.about.mision = "Misión";
        }

        $scope.changevisionin = function () {
            $scope.vision = false
            $scope.about.vision = "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi.";
        };

        $scope.changevisionout = function () {
            $scope.vision = true;

            $scope.about.vision = "Visión";
        }

        $scope.changevaloresin = function () {
            $scope.valores = false
            $scope.about.valores = "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi.";
        };

        $scope.changevaloresout = function () {
            $scope.valores = true;

            $scope.about.valores = "Valores";
        }
  }]);
