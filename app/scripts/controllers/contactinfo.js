'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:ContactinfoCtrl
 * @description
 * # ContactinfoCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('ContactinfoCtrl', function($scope, profileData) {
    var init = function() {
        profileData.getBasicData()
        .then(function(res){
            $scope.basicData = res;
        })
        profileData.getLinks()
        .then(function(res){
            $scope.homeUrl = res.portfolio;
        })
    }
    init();
});