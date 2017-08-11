'use strict';

/**
 * @ngdoc function
 * @name spraytecApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spraytecApp
 */
angular.module('spraytecApp')
    .controller('MainCtrl', ['$scope', function ($scope) {

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

        console.log($scope.Wrapper_slider1);
  }]);
