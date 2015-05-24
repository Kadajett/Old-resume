'use strict';

/**
 * @ngdoc service
 * @name angularJsApp.Profile
 * @description
 * # Profile
 * Service in the angularJsApp.
 */
angular.module('angularJsApp')
  .service('Profile', function Profile(profileData, $q, $log) {
    var profile = this;

    profile.init = function init(){
    	profile.pullProfileFromAPI()
    	.then(function(res){
    		profile.data = res;
    	})
    }

    profile.getProfile = function getProfile(){
    	var defer = $q.defer();

    	if(profile.data){
    		defer.resolve(profile.data);
    	}else{
    		profile.pullProfileFromAPI()
	    	.then(function(res){
	    		profile.data = res;
	    		defer.resolve(profile.data);
	    	})
    	}

    	return defer.promise;
    }

    profile.pullProfileFromAPI = function pullProfileFromAPI(){
    	var defer = $q.defer();

    	profileData.profile.get().$promise
    	.then(function(res){
    		defer.resolve(res);
    	}, function(err){
    		$log.error('Profile.pullProfileFromAPI: ', err);
    		defer.reject(err);
    	})

    	return defer.promise;
    }


    profile.init();
  });
