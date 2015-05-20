'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.gitData
 * @description
 * # gitData
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp').factory('gitData', function($resource, profileData) {
    return {
        activity: $resource('https://api.github.com/users/Kadajett/events'),
        biography: $resource('https://api.github.com/gists/49786d7e8352d73e9c8e'),
        repositories: $resource('https://api.github.com/users/Kadajett/repos')
    };
});