'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:GitCtrl
 * @description
 * # GitCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('GitCtrl', function ($scope, gitData, Git, profileData) {
    var init = function(){
        gitData.activity.query().$promise
        .then(function(res){
            Git.parseActivity(res)
            .then(function(res){
                $scope.activity = res;
            })
        })
        gitData.repositories.query().$promise
        .then(function(repos){
            Git.sortRepos(repos, 5)
            .then(function(res){
                $scope.repos = res;
            })
//             $scope.repos = res;
        })
        profileData.getLinks()
        .then(function(res){
            $scope.gitUrl = res.github.link;
        })
    }
    
    init();
  });
