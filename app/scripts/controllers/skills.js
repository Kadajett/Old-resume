'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('SkillsCtrl', function ($scope, skills) {
    var init = function(){
        skills.codeWars.data.get(null, function(res){
            $scope.skills = res.ranks.languages;
        })
        skills.coderwall.data.get(null, function(res){
            $scope.badges = res.badges;
        })
    }
    
    init();
  });
