'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:ScloudCtrl
 * @description
 * # ScloudCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('ScloudCtrl', function($scope, soundCloud) {
    soundCloud.favorites.query().$promise.then(function(res) {
        $scope.favorites = res;
    })
});