'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('BlogCtrl', function ($scope, Blog) {
    var init = function(){
        $scope.posts = Blog.data.posts;
    }
    
    init();
  });
