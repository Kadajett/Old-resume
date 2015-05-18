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
  		profileData.getBasicData()
    	.then(function(res){
//       success
			$scope.basicData = res;
    	})
  });
