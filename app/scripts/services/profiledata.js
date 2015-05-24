'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.profileData
 * @description
 * # profileData
 * The factory providing getters and setters for all my mersonal information to show
 * on the site. This is supposed to simulate a restful api.
 */
angular.module('angularJsApp').factory('profileData', function($sce, $q, $resource) {
   
    return {
        profile: $resource('http://localhost:3000/api/profiles')
    };
});