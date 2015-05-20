'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.blogData
 * @description
 * # blogData
 * Trying out a new method here. Hopefully binding the factories api to the firebase
 * object will keep two way databinding open. Lets find out.
 */
angular.module('angularJsApp')
  .factory('blogData', function ($firebaseArray) {

    var postsRef = new Firebase("https://githubblog.firebaseio.com/posts"),
        workRef = new Firebase("https://githubblog.firebaseio.com/workHistory")
    

    return {
        posts: $firebaseArray(postsRef),
        work: $firebaseArray(workRef)
    };
  });
