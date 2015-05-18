'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.blogData
 * @description
 * # blogData
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp')
  .factory('blogData', function () {
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
