'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.skills
 * @description
 * # skills
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp').factory('skills', function($resource) {
    //     $resource('', null, {
    //               'jsonp': {
    //                   method: 'JSONP',
    //                   callback: "JSON_CALLBACK"
    //               }
    //           })
    return {
        codeWars: {
            data: $resource("https://www.codewars.com/api/v1/users/Kadajett?access_key=5NUHkFHUE8vkfPYWadpT", {
                callback: "JSON_CALLBACK"
            }, {
                get: {
                    method: "JSONP"
                }
            }),
            icon: ''
        },
        coderwall: {
            data: $resource('https://coderwall.com/kadajett.json'),
            icon: ''
        }
    };
});