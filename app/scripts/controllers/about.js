'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('AboutCtrl', ['$scope', '$window', 'contenidoFactory', 'API_PATH_MEDIA', function ($scope, $window, contenidoFactory, API_PATH_MEDIA) {
        $scope.about = {};
        $scope.mision = true;
        $scope.vision = true;
        $scope.valores = true;
        document.body.style.height = "auto";
        document.body.scrollTop = 0;
        $scope.acerca = [{}];
        $scope.acoordeon = [{}];
        $scope.about.mision = "";
        $scope.about.vision = "";
        $scope.about.valores = "";
        document.body.scrollTop = 0;
        $scope.API_PATH_MEDIA = API_PATH_MEDIA;
        $scope.idiomaLocal = $window.localStorage.idioma;
        
        //console.log($scope.idiomaLocal);
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
            $scope.about.vision = $scope.about.vision;
        }

        $scope.$watch($scope.calcular);

        contenidoFactory.ServiceContenido('manager/Seccion_Acerca/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            $scope.acerca = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Seccion_Mision/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            switch ($window.localStorage.idioma) {
                case 'en_US':
                    $scope.about.mision = data.data[0].titulo_us;
                    $scope.about.mision_texto = data.data[0].textomensaje_us;
                    break;
                case 'es_AR':
                    $scope.about.mision = data.data[0].titulo_ar;
                    $scope.about.mision_texto = data.data[0].textomensaje_ar;
                    break;
                case 'es_BR':
                    $scope.about.mision = data.data[0].titulo_br;
                    $scope.about.mision_texto = data.data[0].textomensaje_;
                    break;

                default:
            }
            
        });

        contenidoFactory.ServiceContenido('manager/Seccion_Vision/?format=json', 'GET', '{}').then(function (data) {
            
            switch ($window.localStorage.idioma) {
                case 'en_US':
                    $scope.about.vision = data.data[0].titulo_us;
                    $scope.about.vision_texto = data.data[0].textomensaje_us;
                    break;
                case 'es_AR':
                    $scope.about.vision = data.data[0].titulo_ar;
                    $scope.about.vision_texto = data.data[0].textomensaje_ar;
                    break;
                case 'es_BR':
                    $scope.about.vision = data.data[0].titulo_br;
                    $scope.about.vision_texto = data.data[0].textomensaje_;
                    break;

                default:
            }
        });

        contenidoFactory.ServiceContenido('manager/Seccion_Valores/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            switch ($window.localStorage.idioma) {
                case 'en_US':
                    $scope.about.valores = data.data[0].titulo_us;
                    $scope.about.valores_texto = data.data[0].textomensaje_us;
                    break;
                case 'es_AR':
                    $scope.about.valores = data.data[0].titulo_ar;
                    $scope.about.valores_texto = data.data[0].textomensaje_ar;
                    break;
                case 'es_BR':
                    $scope.about.valores = data.data[0].titulo_br;
                    $scope.about.valores_texto = data.data[0].textomensaje_br;
                    break;

                default:
            }
        });

        contenidoFactory.ServiceContenido('manager/Seccion_Paises/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            $scope.titulopais = data.data;
        });

        //contenidoFactory.ServiceContenido('manager/Seccion_Paises/?format=json', 'GET', '{}').then(function (data) {
        //    //console.log(data.data);
        //    $scope.titulopais = data.data;
        //});

        contenidoFactory.ServiceContenido('manager/Seccion_Paises_acordeon/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            //$scope.acoordeon = data.data;
            //$scope.color = ['#EBEBEB', '#D8D8D8'];
            var tipo;
            for (var i = 0; i < data.data.length; i++) {
                if (i % 2) {
                    tipo = '#EBEBEB';
                }
                else {
                    tipo = '#D8D8D8';
                };
                //console.log(tipo);
                $scope.acoordeon.push({
                    datos_contacto_ar: data.data[i].datos_contacto_ar,
                    datos_contacto_br: data.data[i].datos_contacto_br,
                    datos_contacto_us: data.data[i].datos_contacto_us,
                    pais_ar: data.data[i].pais_ar,
                    pais_br: data.data[i].pais_br,
                    pais_us: data.data[i].pais_us,
                    textomensaje_ar: data.data[i].textomensaje_ar,
                    textomensaje_br: data.data[i].textomensaje_br,
                    textomensaje_us: data.data[i].textomensaje_us,
                    color: tipo
                })
            }

            console.log($scope.acoordeon);
        });

        $scope.changemisionin = function () {
            $scope.mision = false
        };

        $scope.changemisionout = function () {
            $scope.mision = true;
        }

        $scope.changevisionin = function () {
            $scope.vision = false
        };

        $scope.changevisionout = function () {
            $scope.vision = true;
        }

        $scope.changevaloresin = function () {
            $scope.valores = false
        };

        $scope.changevaloresout = function () {
            $scope.valores = true;
        }
  }]);
