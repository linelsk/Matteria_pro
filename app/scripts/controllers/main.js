'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('MainCtrl', ['$scope', '$window', 'contenidoFactory', function ($scope, $window, contenidoFactory) {

        $scope.sliderVideo = [{}];
        $scope.sliderTexto = [{}];
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
            $scope.sliderTexto = $scope.sliderTexto;
        }

        $scope.$watch($scope.calcular);

        contenidoFactory.ServiceContenido('manager/Video/?format=json', 'GET', '{}').then(function (data) {
            $scope.sliderVideo = data.data;
            //console.log($scope.sliderVideo[0].video);
        });

        contenidoFactory.ServiceContenido('manager/SliderHome/?format=json', 'GET', '{}').then(function (data) {
            $scope.sliderTexto = data.data;
            //console.log($scope.sliderTexto);
        });

        contenidoFactory.ServiceContenido('manager/Seccion_Somos_Una_Empresa/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            $scope.empresa = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Seccion_Fulltec/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            $scope.fulltec = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Empresa_no_uno/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            $scope.Empresa_no = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Seccion_Contactanos/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            $scope.contacto = data.data;
        });
        

        $scope.Wrapper_slider1 = [{}];
        $scope.Wrapper_slider1.push([{
            item: "http://via.placeholder.com/200x150/3FC380/ffffff"
        },
        {
            item: "http://via.placeholder.com/200x150/1A2A0F/ffffff",
        },
        {
            item: "http://via.placeholder.com/200x150/000000/ffffff"
        }
        ]);
  }]);
