'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('ProductoCtrl', ['$scope', 'contenidoFactory', 'API_PATH_MEDIA', '$window', function ($scope, contenidoFactory, API_PATH_MEDIA, $window) {
        document.body.style.height = "auto";
        document.body.scrollTop = 0;
        $scope.productos = [];
        $scope.idiomaLocal = $window.localStorage.idioma;
        $scope.total = false;

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
        $scope.inicio = true


        $scope.$watch($scope.calcular);

        $scope.tiles = buildGridModel({
            icon: "avatar:svg-",
            title: "Producto-",
            background: ""
        });

        function buildGridModel(tileTmpl) {
            var it, results = [];

            for (var j = 0; j < 6; j++) {

                it = angular.extend({}, tileTmpl);
                it.icon = "";
                it.title = it.title + (j + 1);
                it.span = { row: 1, col: 1 };

                switch (j + 1) {
                    case 1:
                        it.background = "red";
                        it.span.row = it.span.col = 2;
                        break;

                    case 2: it.background = "green"; break;
                    case 3: it.background = "darkBlue"; break;
                    case 4:
                        it.background = "blue";
                        it.span.col = 1;
                        break;

                    case 5:
                        it.background = "yellow";
                        it.span.row = it.span.col = 2;
                        break;

                    case 6: it.background = "pink"; break;
                    case 7: it.background = "darkBlue"; break;
                    case 8: it.background = "purple"; break;
                    case 9: it.background = "deepBlue"; break;
                    case 10: it.background = "lightPurple"; break;
                    case 11: it.background = "yellow"; break;
                }

                results.push(it);
            }
            return results;
        }

        contenidoFactory.ServiceContenido('catalogos/Producto/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.productos = data.data;
            $scope.productosSelect = data.data;


        });

        contenidoFactory.ServiceContenido('catalogos/Pais/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.pais = data.data;

        });

        contenidoFactory.ServiceContenido('catalogos/Cultivo/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.cultivo = data.data;

        });

        $scope.setbusqueda = function () {
            $scope.inicio = true;
            contenidoFactory.ServiceContenido('catalogos/Producto/?format=json', 'GET', '{}').then(function (data) {
                //console.log(data.data);
                $scope.productos = [];
                for (var i = 0; i < data.data.length; i++) {                   

                    for (var j = 0; j < data.data[i].pais.length; j++) {

                        if (data.data[i].pais[j] == document.getElementById("selectPais").value) {
                            //console.log(data.data[i].pais.length);
                            console.log(data.data[i].id);
                            $scope.productos.push({
                                id: data.data[i].id,
                                image: data.data[i].image,
                                nombre: data.data[i].nombre
                            });
                        }                            
                    }
                }
                if ($scope.productos.length == 1) {
                    $scope.total = true;
                }
                else {
                    $scope.total = false;
                }
                //$scope.productos(0, 1);

                console.log($scope.productos);
            });
            //$scope.productos = $.grep($scope.productos, function (n) {
            //    return (n);
            //});
        }

        $scope.setbusquedaCultivo = function () {
            $scope.inicio = true;
            contenidoFactory.ServiceContenido('catalogos/Producto/?format=json', 'GET', '{}').then(function (data) {
                //console.log(data.data);
                $scope.productos = [];
                for (var i = 0; i < data.data.length; i++) {

                    for (var j = 0; j < data.data[i].cultivo.length; j++) {

                        if (data.data[i].cultivo[j] == document.getElementById("selectCultivo").value) {
                            //console.log(data.data[i].pais.length);
                            console.log(data.data[i].id);
                            $scope.productos.push({
                                id: data.data[i].id,
                                image: data.data[i].image,
                                nombre: data.data[i].nombre
                            });
                        }
                    }
                }
                //$scope.cultivo(0, 1);
                if ($scope.productos.length == 1) {
                    $scope.total = true;
                }
                else {
                    $scope.total = false;
                }
            });
            //$scope.productos = $.grep($scope.productos, function (n) {
            //    return (n);
            //});
        }

        $scope.setbusquedaProducto = function () {
            $scope.inicio = false;
            contenidoFactory.ServiceContenido('catalogos/Producto/?format=json', 'GET', '{}').then(function (data) {
                console.log(data.data);
                $scope.productos = data.data;
                //$scope.productosSelect = data.data;


            });
        }
    }]);