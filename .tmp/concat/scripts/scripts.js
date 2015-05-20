'use strict';
angular.module('angularJsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]).config([
  '$routeProvider',
  '$resourceProvider',
  '$compileProvider',
  function ($routeProvider, $resourceProvider, $compileProvider) {
    // 	 $compileProvider.debugInfoEnabled(false);
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
angular.module('angularJsApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:TopnavCtrl
 * @description
 * # TopnavCtrl
 * View controller for the heaer of my portfolio page. 
 */
angular.module('angularJsApp').controller('TopnavCtrl', [
  '$scope',
  'profileData',
  function ($scope, profileData) {
    var init = function () {
      profileData.getBasicData().then(function (res) {
        //       success
        $scope.basicData = res;
      });
      profileData.getLinks(true).then(function (res) {
        $scope.links = res;
      });
    };
    init();
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:GitCtrl
 * @description
 * # GitCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('GitCtrl', [
  '$scope',
  'gitData',
  'Git',
  'profileData',
  function ($scope, gitData, Git, profileData) {
    var init = function () {
      gitData.activity.query().$promise.then(function (res) {
        Git.parseActivity(res, 5).then(function (res) {
          $scope.activity = res;
        });
      });
      gitData.repositories.query().$promise.then(function (repos) {
        Git.sortRepos(repos, 5).then(function (res) {
          $scope.repos = res;
        });
      });
      profileData.getLinks().then(function (res) {
        $scope.gitUrl = res.github.link;
      });
    };
    init();
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('BlogCtrl', [
  '$scope',
  'Blog',
  function ($scope, Blog) {
    var init = function () {
      $scope.posts = Blog.data.posts;
    };
    init();
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.profileData
 * @description
 * # profileData
 * The factory providing getters and setters for all my mersonal information to show
 * on the site. This is supposed to simulate a restful api.
 */
angular.module('angularJsApp').factory('profileData', [
  '$sce',
  '$q',
  function ($sce, $q) {
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
        title: 'Javacript Engineer',
        phone: '219-628-2736',
        email: 'jeremy.ryan.stover@gmail.com',
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
          },
          portfolio: {
            link: 'http://kadajett.github.io',
            icon: 'fa fa-external-link'
          },
          linkedIn: {
            link: 'https://www.linkedin.com/in/kadajett',
            icon: 'fa fa-linkedin'
          }
        }
      };
    return {
      getBasicData: function () {
        var defer = $q.defer();
        var basic = {
            nameSeperated: profile.name,
            nameFull: profile.name.first + ' ' + profile.name.last,
            title: profile.title,
            email: profile.email,
            resumeLink: profile.links.resumeLink,
            city: profile.location.city
          };
        defer.resolve(basic);
        return defer.promise;
      },
      getResumeHtml: function () {
        var defer = $q.defer();
        defer.resolve($sce.trustAsHtml(profile.links.resumeEmbedHTML));
        return defer.promise;
      },
      getLinks: function (asArray) {
        var defer = $q.defer();
        if (asArray) {
          var linksArr = [];
          angular.forEach(profile.links, function (element) {
            linksArr.push(element);
          });
          defer.resolve(linksArr);
        } else {
          defer.resolve(profile.links);
        }
        return defer.promise;
      }
    };
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.blogData
 * @description
 * # blogData
 * Trying out a new method here. Hopefully binding the factories api to the firebase
 * object will keep two way databinding open. Lets find out.
 */
angular.module('angularJsApp').factory('blogData', [
  '$firebaseArray',
  function ($firebaseArray) {
    var postsRef = new Firebase('https://githubblog.firebaseio.com/posts'), workRef = new Firebase('https://githubblog.firebaseio.com/workHistory');
    return {
      posts: $firebaseArray(postsRef),
      work: $firebaseArray(workRef)
    };
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.gitData
 * @description
 * # gitData
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp').factory('gitData', [
  '$resource',
  'profileData',
  function ($resource, profileData) {
    return {
      activity: $resource('https://api.github.com/users/Kadajett/events'),
      biography: $resource('https://api.github.com/gists/49786d7e8352d73e9c8e'),
      repositories: $resource('https://api.github.com/users/Kadajett/repos')
    };
  }
]);
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
angular.module('angularJsApp').service('Blog', [
  'blogData',
  function Blog(blogData) {
    var blog = this;
    var init = function () {
      blog.data = blogData;
    };
    blog.doSomething = function () {
    };
    init();
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.Git
 * @description
 * # Git
 * Service in the angularJsApp.
 */
angular.module('angularJsApp').service('Git', [
  '$q',
  function Git($q) {
    var git = this;
    // Create the sentences describing activities from github     
    git.parseActivity = function (activity, limit) {
      var defer = $q.defer();
      var newArr = [];
      angular.forEach(activity, function (item) {
        var newItem = {};
        if (item.type == 'PushEvent') {
          console.log(item);
          newItem.sentence = '<a href="http://github.com/' + item.actor.login + '">' + item.actor.login + '</a>' + ' pushed to ' + item.payload.ref + ' on <a href="' + item.repo.url + '">' + item.repo.name + '</a>';
        } else if (item.type == 'CreateEvent') {
          newItem.sentence = '<a href="http://github.com/' + item.actor.login + '">' + item.actor.login + '</a>' + ' created ' + item.payload.ref_type + ' ' + item.payload.ref + ' on <a href="' + item.repo.url + '">' + item.repo.name + '</a>';
        }
        newItem.date = item.created_at;
        newArr.push(newItem);
      });
      if (limit) {
        newArr = newArr.splice(0, limit);
      }
      defer.resolve(newArr);
      return defer.promise;
    };
    git.sortRepos = function (repos, limit) {
      var defer = $q.defer();
      repos = repos.sort(function (a, b) {
        if (a.stargazers_count < b.stargazers_count) {
          return 1;
        } else if (a.stargazers_count > b.stargazers_count) {
          return -1;
        }
        return 0;
      });
      if (limit) {
        repos = repos.slice(0, limit);
      }
      defer.resolve(repos);
      return defer.promise;
    };
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.Profile
 * @description
 * # Profile
 * Service in the angularJsApp.
 */
angular.module('angularJsApp').service('Profile', function Profile() {
});
'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:ContactinfoCtrl
 * @description
 * # ContactinfoCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('ContactinfoCtrl', [
  '$scope',
  'profileData',
  function ($scope, profileData) {
    var init = function () {
      profileData.getBasicData().then(function (res) {
        $scope.basicData = res;
      });
      profileData.getLinks().then(function (res) {
        $scope.homeUrl = res.portfolio;
      });
    };
    init();
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('AboutCtrl', [
  '$scope',
  'gitData',
  function ($scope, gitData) {
    var init = function () {
      gitData.biography.get(null, function (res) {
        $scope.bio = res.files.biography.content;
      });
    };
    init();
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.skills
 * @description
 * # skills
 * Factory in the angularJsApp.
 */
angular.module('angularJsApp').factory('skills', [
  '$resource',
  function ($resource) {
    //     $resource('', null, {
    //               'jsonp': {
    //                   method: 'JSONP',
    //                   callback: "JSON_CALLBACK"
    //               }
    //           })
    return {
      codeWars: {
        data: $resource('https://www.codewars.com/api/v1/users/Kadajett?access_key=5NUHkFHUE8vkfPYWadpT'),
        icon: ''
      },
      coderwall: {
        data: $resource('https://coderwall.com/kadajett.json'),
        icon: ''
      }
    };
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('SkillsCtrl', [
  '$scope',
  'skills',
  function ($scope, skills) {
    var init = function () {
      skills.codeWars.data.get(null, function (res) {
        $scope.skills = res.ranks.languages;
      });
      skills.coderwall.data.get(null, function (res) {
        $scope.badges = res.badges;
      });
    };
    init();
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.soundCloud
 * @description
 * # soundCloud
 * Used for pulling my list of programming music
 */
angular.module('angularJsApp').factory('soundCloud', [
  '$resource',
  function ($resource) {
    return { favorites: $resource('http://api.soundcloud.com/users/jeremy-stover-kadajett/favorites?client_id=f450934db7fc221db76648ea6d02b741') };
  }
]);
'use strict';
/**
 * @ngdoc service
 * @name angularJsApp.sCViewService
 * @description
 * # sCViewService
 * Service in the angularJsApp.
 */
angular.module('angularJsApp').service('sCViewService', function () {
});
'use strict';
/**
 * @ngdoc function
 * @name angularJsApp.controller:ScloudCtrl
 * @description
 * # ScloudCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp').controller('ScloudCtrl', [
  '$scope',
  'soundCloud',
  function ($scope, soundCloud) {
    soundCloud.favorites.query().$promise.then(function (res) {
      $scope.favorites = res;
    });
  }
]);