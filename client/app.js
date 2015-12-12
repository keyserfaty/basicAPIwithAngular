'use strict';

angular.module('BasicApp', [
  'ngRoute',
  'main.controller',
  'posts.controller',
  'posts.directives',
  'post.controller',
  'post.directives',
  'modal.directives',
  'dropdown.directives'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider
    .when("/posts", {
      templateUrl: "partials/posts/posts.html",
      controller: "PostsCtrl"
    })
    .when("/post/:_id", {
      templateUrl: "partials/posts/post/post.html",
      controller: "PostCtrl"
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
