'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.gitData
 * @description
 * # gitData
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp')
  .factory('gitData', function ($resource, profileData) {
    // Service logic
    // ...
    

    // Public API here
    return {
      activity: $resource('https://api.github.com/users/kadajett/events') 
    };
  });
