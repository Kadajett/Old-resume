'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.profileData
 * @description
 * # profileData
 * The factory providing getters and setters for all my mersonal information to show
 * on the site. This is supposed to simulate a restful api.
 */
angular.module('angularJsApp')
  .factory('profileData', function ($sce, $q) {
   var profile = {
     name: {
       first: 'Jeremy',
       last: 'Stover',
       nick: 'Kadajett'
     },
     age: 23,
     title: "Javacript Engineer",
     phone: "219-628-2736",
     email: "jeremy.ryan.stover@gmail.com",
     links: {
       resumeEmbedHTML: '<iframe src="https://docs.google.com/document/d/1I2TjapGUfQZVrM52SWQMo35IxixjsmHvOXhRK5zPAVk/pub?embedded=true"></iframe>',
       resumeLink: 'https://docs.google.com/document/d/1I2TjapGUfQZVrM52SWQMo35IxixjsmHvOXhRK5zPAVk/edit?usp=sharing',
       github: 'https://github.com/kadajett',
       youtube: 'https://www.youtube.com/user/JeremyStoverGD/videos',
       googleP: 'https://plus.google.com/+JeremyStover/posts'
     }
     
   };

    return {
      getBasicData: function(){
        var defer = $q.defer();
        
        var basic = {
          name: profile.name,
          title: profile.title,
          email: profile.email,
          resumeLink: profile.links.resumeLink
        }
        
        defer.resolve(basic);
        
        return defer.promise;
      },
      getResumeHtml: function(){
        var defer = $q.defer();
        
        defer.resolve($sce.trustAsHtml(profile.links.resumeEmbedHTML));
        
        return defer.promise;
      }
    };
  });
