'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('HeaderCtrl', ['$scope', 'contenidoFactory', '$window', 'API_PATH_MEDIA', function ($scope, contenidoFactory, $window, API_PATH_MEDIA) {

        //document.body.style.width = "100%";
        document.body.style.height = "auto";
        document.body.scrollTop = 0;
        $scope.height = 50;
        $scope.width = 100;
        $scope.menuHeader = [{}];
        $scope.contacto = [{}];
        $scope.API_PATH_MEDIA = API_PATH_MEDIA;
        $scope.badera = false;
        $scope.tama = "0";
        //$scope.class_menu_open = "class_menu";

        if ($window.localStorage.idioma == undefined) {
            $scope.idiomaLocal = $window.localStorage.idioma = 'es_AR';
        }

        $scope.changeLanguage = function (key) {
            console.log(key);
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

        $scope.open = function () {
            $scope.class_menu_open = "class_menu_open";
        }

        contenidoFactory.ServiceContenido('manager/ImagenMenu/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.imageHeader = data.data[0].image
        });

        contenidoFactory.ServiceContenido('manager/Menu/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data[0]);
            $scope.menuHeader = data.data[0]
        });

        $scope.setMenu = function () {
            //console.log(document.getElementById("burger-check").checked);
            if (document.getElementById("burger-check").checked) {
                $scope.badera = true;
                $scope.tama = "250px";
            }
            else {
                $scope.badera = false;
                $scope.tama = "0";
            }
            
            //$scope.height = 100;
            //$scope.width = 200;
        }

        $scope.setUnMenu = function () {
            document.getElementById("burger-check").checked = false;
            $scope.badera = false;
            $scope.tama = "0";
        }

    }]);