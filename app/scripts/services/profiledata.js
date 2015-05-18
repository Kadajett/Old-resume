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
     githubUsername: 'Kadajett',
     location: {
       city: 'San Francisco',
       state: 'California'
     },
     age: 23,
     title: "Javacript Engineer",
     phone: "219-628-2736",
     email: "jeremy.ryan.stover@gmail.com",
     resumeEmbedHTML: '<iframe src="https://docs.google.com/document/d/1I2TjapGUfQZVrM52SWQMo35IxixjsmHvOXhRK5zPAVk/pub?embedded=true"></iframe>',
     links: {
       resume: {
         link: 'https://docs.google.com/document/d/1I2TjapGUfQZVrM52SWQMo35IxixjsmHvOXhRK5zPAVk/edit?usp=sharing',
         icon: 'fa fa-file-text'
       }, 
       github: {
         link: 'https://github.com/kadajett',
         icon: 'fa fa-github-alt'
       },
       youtube: {
         link: 'https://www.youtube.com/user/JeremyStoverGD/videos',
         icon: 'fa fa-youtube'
       },
       googlePlus: {
         link: 'https://plus.google.com/+JeremyStover/posts',
         icon: 'fa fa-google-plus'
       }
     }
     
   };

    return {
      getBasicData: function(){
        var defer = $q.defer();
        
        var basic = {
          nameSeperated: profile.name,
          nameFull: profile.name.first + ' ' + profile.name.last,
          title: profile.title,
          email: profile.email,
          resumeLink: profile.links.resumeLink,
          city: profile.location.city
        }
        
        defer.resolve(basic);
        
        return defer.promise;
      },
      getResumeHtml: function(){
        var defer = $q.defer();
        
        defer.resolve($sce.trustAsHtml(profile.links.resumeEmbedHTML));
        
        return defer.promise;
      },
      getLinks: function(asArray){
        var defer = $q.defer();
        
        if(asArray){
          var linksArr = [];
          angular.forEach(profile.links, function(element) {
  				linksArr.push(element);
			 });
          defer.resolve(linksArr);
        }else{
          defer.resolve(profile.links);
        }
        
        return defer.promise;
      }
    };
  });
