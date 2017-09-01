'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('EnsayoCtrl', ['$scope', '$window', 'contenidoFactory', 'API_PATH_MEDIA', function ($scope, $window, contenidoFactory, API_PATH_MEDIA) {

        document.body.style.height = "auto";
        document.body.scrollTop = 0;
        $scope.idiomaLocal = $window.localStorage.idioma;

        console.log($scope.idiomaLocal);
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
            //$scope.about.vision = $scope.about.vision;
        }

        $scope.$watch($scope.calcular);

        contenidoFactory.ServiceContenido('catalogos/Producto/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.productos = data.data;
        });

        contenidoFactory.ServiceContenido('catalogos/Pais/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.pais = data.data;

        });

        contenidoFactory.ServiceContenido('catalogos/Cultivo/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.cultivo = data.data;

        });

        contenidoFactory.ServiceContenido('catalogos/Ensayo/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.ensayos = data.data;

        });


        $scope.setbusqueda = function () {
            $scope.inicio = true;
            contenidoFactory.ServiceContenido('catalogos/Ensayo/?format=json', 'GET', '{}').then(function (data) {
                //console.log(data.data);
                $scope.ensayos = [];
                for (var i = 0; i < data.data.length; i++) {

                    for (var j = 0; j < data.data[i].pais.length; j++) {

                        if (data.data[i].pais[j] == document.getElementById("selectPais").value) {
                            //console.log(data.data[i].pais.length);
                            //console.log(data.data[i].id);
                            $scope.ensayos.push({
                                id: data.data[i].id,
                                image: data.data[i].file,
                                nombre: data.data[i].nombre
                            });
                        }
                    }
                }
                //$scope.ensayos(0, 1);

            });
            //$scope.productos = $.grep($scope.productos, function (n) {
            //    return (n);
            //});
        }

        $scope.setbusquedaCultivo = function () {
            $scope.inicio = true;
            contenidoFactory.ServiceContenido('catalogos/Ensayo/?format=json', 'GET', '{}').then(function (data) {
                //console.log(data.data);
                $scope.ensayos = [];
                for (var i = 0; i < data.data.length; i++) {

                    for (var j = 0; j < data.data[i].cultivo.length; j++) {

                        if (data.data[i].cultivo[j] == document.getElementById("selectCultivo").value) {
                            //console.log(data.data[i].pais.length);
                            console.log(data.data[i].id);
                            $scope.ensayos.push({
                                id: data.data[i].id,
                                image: data.data[i].file,
                                nombre: data.data[i].nombre
                            });
                        }
                    }
                }
                //$scope.cultivo(0, 1);

            });
            //$scope.ensayos = $.grep($scope.ensayos, function (n) {
            //    return (n);
            //});
        }

        $scope.setbusquedaProducto = function () {
            //console.log("OKKK");
            contenidoFactory.ServiceContenido('catalogos/Ensayo/?format=json', 'GET', '{}').then(function (data) {
                //console.log(data.data);
                $scope.ensayos = [];
                for (var i = 0; i < data.data.length; i++) {
                    
                    for (var j = 0; j < data.data[i].producto.length; j++) {
                        //console.log(document.getElementById("selectProducto").value);
                        if (data.data[i].producto[j] == document.getElementById("selectProducto").value) {
                            //console.log("OKKK");
                            $scope.ensayos.push({
                                id: data.data[i].id,
                                image: data.data[i].file,
                                nombre: data.data[i].nombre
                            });
                        }
                    }
                }
                //$scope.ensayos(0, 1);
            });
        }
    }]);