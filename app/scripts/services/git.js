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
    git.parseActivity = function(activity) {
        var defer = $q.defer();
        var newArr = [];
        angular.forEach(activity, function(item) {
            var newItem = {}
            if(item.type == "PushEvent") {
                newItem.sentence = '<a href="http://github.com/' + item.actor.login + '">' + item.actor.login + '</a>' + ' pushed to ' + item.repo.name
            } else if(item.type == "CreateEvent") {
                newItem.sentence = '<a href="http://github.com/' + item.actor.login + '">' + item.actor.login + '</a>' + ' created ' + item.payload.ref_type + ' ' + item.payload.ref
            }
            newItem.date = item.created_at
            newArr.push(newItem);
        })
        defer.resolve(newArr);
        
        
        
        return defer.promise;
    }
});