'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('AboutCtrl', ['$scope', function ($scope) {
        $scope.about = {};
        $scope.mision = true;
        $scope.vision = true;
        $scope.valores = true;

        $scope.about.mision = "Misión";
        $scope.about.vision = "Visión";
        $scope.about.valores = "Valores";

        console.log($scope.about.mision);

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
