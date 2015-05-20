'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.soundCloud
 * @description
 * # soundCloud
 * Used for pulling my list of programming music
 */
angular.module('angularJsApp')
  .factory('soundCloud', function ($resource) {

    return {
      favorites: $resource('http://api.soundcloud.com/users/jeremy-stover-kadajett/favorites?client_id=f450934db7fc221db76648ea6d02b741')
    };
  });
