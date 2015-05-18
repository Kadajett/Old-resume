'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:GitCtrl
 * @description
 * # GitCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('GitCtrl', function ($scope, gitData, Git) {
    var init = function(){
        gitData.activity.query().$promise
        .then(function(res){
            Git.parseActivity(res)
            .then(function(res){
                $scope.activity = res;
            })
        })
    }
    
    init();
  });
