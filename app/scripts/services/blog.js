'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.Blog
 * @description
 * # Blog
 * Used as the middle man between the API factory, and the controller. Binds the 
 * data down, and also does all logic processing. Still new to this code design,
 * it seems a little to verbose. Maybe it will help?
 */
angular.module('angularJsApp')
  .service('Blog', function Blog(blogData) {
    var blog = this;
    var init = function(){
        blog.data = blogData;
    }
    
    blog.doSomething = function(){
//         totally did something bro.
    }
    
    init();
  });
