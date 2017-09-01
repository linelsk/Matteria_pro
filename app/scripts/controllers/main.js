'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('MainCtrl', ['$scope', '$window', 'contenidoFactory', 'API_PATH_MEDIA', function ($scope, $window, contenidoFactory, API_PATH_MEDIA) {

        $scope.sliderVideo = [{}];
        $scope.sliderTexto = [{}];
        $scope.idiomaLocal = $window.localStorage.idioma;
        document.body.scrollTop = 0;
        document.body.style.height = "auto";
        $scope.Wrapper_slider1 = [{}];
        $scope.API_PATH_MEDIA = API_PATH_MEDIA;
        $scope.Carrousel_texto = [{}];

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

        $scope.gracias = function (ev) {
            contenidoFactory.ServiceContenido('contacto/Contacto/', 'POST', {
                "nombres": $scope.contacto.nombre,
                "correo": $scope.contacto.mail,
                "asunto": "",
                "mensaje": "",
                "ishome": true,
                "created_by": 1
            }).then(function (data) {
                console.log(data);
                contenidoFactory.mensaje(ev, "¡Gracias por ponerte en contacto con nosotros! En breve te responderemos.");
            });
        }

        contenidoFactory.ServiceContenido('manager/SliderHome/?format=json', 'GET', '{}').then(function (data) {
            $scope.sliderTexto = data.data;
            console.log($scope.sliderTexto);
        });

        contenidoFactory.ServiceContenido('manager/Empresa/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.empresa = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Carrousel_texto/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            //$scope.Carrousel_texto = data.data;
            for (var i = 0; i < data.data.length; i++) {
                $scope.fulltec.push(
                    {
                        //id: data.data[i].id,
                        //titulo: data.data[i].titulo,
                        //textomensaje_us: data.data[i].textomensaje_us,
                        //textomensaje_ar: data.data[i].textomensaje_ar,
                        //textomensaje_br: data.data[i].textomensaje_br,
                        //mensaje_boton_us: data.data[i].mensaje_boton_us,
                        //mensaje_boton_ar: data.data[i].mensaje_boton_ar,
                        //mensaje_boton_br: data.data[i].mensaje_boton_br,
                        image: $scope.API_PATH_MEDIA + data.data[i].image,
                    }
                );
            }
          
            console.log($scope.fulltec);
            
        });

        contenidoFactory.ServiceContenido('manager/Texto_empresa/?format=json', 'GET', '{}').then(function (data) {
            console.log(data.data);
            $scope.Empresa_no = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Contactanos/?format=json', 'GET', '{}').then(function (data) {
            //console.log(data.data);
            $scope.contacto = data.data;
        });

        $(document).ready(function () {
            var i;
            contenidoFactory.ServiceContenido('manager/Carrousel_texto/?format=json', 'GET', '{}').then(function (data) {
                //console.log(length - 1);
                i = data.data.length - 1;
                $("#h4_titulo").text(data.data[data.data.length - 1].titulo);
                $("#p_textomensaje_us").html(data.data[data.data.length - 1].textomensaje_us);
                $("#p_textomensaje_ar").html(data.data[data.data.length - 1].textomensaje_ar);
                $("#p_textomensaje_br").html(data.data[data.data.length - 1].textomensaje_br);
                $("#span_mensaje_boton_us").text(data.data[data.data.length - 1].mensaje_boton_us);
                $("#span_mensaje_boton_ar").text(data.data[data.data.length - 1].mensaje_boton_ar);
                $("#span_mensaje_boton_br").text(data.data[data.data.length - 1].mensaje_boton_br);

            });

            $("#btn_siguiente").click(function () {
                i = i + 1;
           
                contenidoFactory.ServiceContenido('manager/Carrousel_texto/?format=json', 'GET', '{}').then(function (data) {

                    if (data.data[i] == undefined) {
                        i = 0;
                    }
                    //console.log(data.data[i]);
                    $("#h4_titulo").text(data.data[i].titulo);
                    $("#p_textomensaje_us").html(data.data[i].textomensaje_us);
                    $("#p_textomensaje_ar").html(data.data[i].textomensaje_ar);
                    $("#p_textomensaje_br").html(data.data[i].textomensaje_br);
                    $("#span_mensaje_boton_us").text(data.data[i].mensaje_boton_us);
                    $("#span_mensaje_boton_ar").text(data.data[i].mensaje_boton_ar);
                    $("#span_mensaje_boton_br").text(data.data[i].mensaje_boton_br);
                    
                });
            });

            $("#btn_enterior").click(function () {
                i = i - 1;

                contenidoFactory.ServiceContenido('manager/Carrousel_texto/?format=json', 'GET', '{}').then(function (data) {

                    if (data.data[i] == undefined) {
                        i = data.data.length - 1;
                    }

                    $("#h4_titulo").text(data.data[i].titulo);
                    $("#p_textomensaje_us").html(data.data[i].textomensaje_us);
                    $("#p_textomensaje_ar").html(data.data[i].textomensaje_ar);
                    $("#p_textomensaje_br").html(data.data[i].textomensaje_br);
                    $("#span_mensaje_boton_us").text(data.data[i].mensaje_boton_us);
                    $("#span_mensaje_boton_ar").text(data.data[i].mensaje_boton_ar);
                    $("#span_mensaje_boton_br").text(data.data[i].mensaje_boton_br);

                });
            });
        });
    }]);