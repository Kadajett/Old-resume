'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:TopnavCtrl
 * @description
 * # TopnavCtrl
 * View controller for the heaer of my portfolio page. 
 */
angular.module('angularJsApp')
  .controller('TopnavCtrl', function ($scope, profileData) {
  		var init = function(){
        profileData.getBasicData()
        .then(function(res){
  //       success
           $scope.basicData = res;
        })
        profileData.getLinks(true)
        .then(function(res){
          $scope.links = res;
        })
      }
  		
      
      
      init();
  });
