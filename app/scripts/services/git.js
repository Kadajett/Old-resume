'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.Git
 * @description
 * # Git
 * Service in the angularJsApp.
 */
angular.module('angularJsApp').service('Git', function Git($q) {
    var git = this;
    
    // Create the sentences describing activities from github     
    git.parseActivity = function(activity) {
        var defer = $q.defer();
        var newArr = [];
        angular.forEach(activity, function(item) {
            var newItem = {}
            if(item.type == "PushEvent") {
                newItem.sentence = '<a href="http://github.com/' + item.actor.login + '">' + item.actor.login + '</a>' + ' pushed to ' + item.repo.name
            } else if(item.type == "CreateEvent") {
                console.log(item)
                newItem.sentence = '<a href="http://github.com/' + item.actor.login + '">' + item.actor.login + '</a>' + ' created ' + item.payload.ref_type + ' ' + item.payload.ref + ' on <a href="' + item.repo.url + '">' + item.repo.name + '</a>'
            }
            newItem.date = item.created_at
            newArr.push(newItem);
        })
        defer.resolve(newArr);
        
        
        
        return defer.promise;
    };
    
    git.sortRepos = function(repos, limit){
        var defer = $q.defer();
        repos = repos.sort(function(a,b){
            if(a.stargazers_count < b.stargazers_count){
                return 1;
            }else if(a.stargazers_count > b.stargazers_count){
                return -1;
            }
            
            return 0;
        })
        
        if(limit){
            repos = repos.slice(0, limit);
        }
        defer.resolve(repos);
        
        return defer.promise;
    }
});


