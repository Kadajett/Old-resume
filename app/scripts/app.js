'use strict';
angular.module('angularJsApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'firebase']).config(function($routeProvider, $resourceProvider, $compileProvider) {
    // 	 $compileProvider.debugInfoEnabled(false);
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});