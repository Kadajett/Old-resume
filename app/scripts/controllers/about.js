'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('AboutCtrl', function ($scope, gitData) {
    var init = function(){
        gitData.biography.get(null, function(res){
            $scope.bio = res.files.biography.content;
        })
    }
    
    init();
  });
