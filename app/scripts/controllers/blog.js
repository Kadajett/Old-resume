'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
