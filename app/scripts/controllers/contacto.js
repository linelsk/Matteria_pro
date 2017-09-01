'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('ContactoCtrl', ['$scope', '$window', 'contenidoFactory', function ($scope, $window, contenidoFactory) {
        
        $scope.contacto = [{}];
        document.body.scrollTop = 0;
        document.body.style.height = "auto";
        $scope.save = function () {

            contenidoFactory.ServiceContenido('contacto/Contacto/', 'POST', {
                "nombres": $scope.contacto.nombres,
                "correo": $scope.contacto.correo,
                "asunto": $scope.contacto.asunto,
                "mensaje": $scope.contacto.mensaje,
                "ishome": false,
                "created_by": 1
            }).then(function (data) {
                console.log(data);
                $window.location.href = "gracias";
            });

            
        }
    }]);