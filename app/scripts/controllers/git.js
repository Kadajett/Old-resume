'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:GitCtrl
 * @description
 * # GitCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('GitCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
