'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.gitData
 * @description
 * # gitData
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp')
  .factory('gitData', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
