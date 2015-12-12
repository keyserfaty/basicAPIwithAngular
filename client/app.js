'use strict';

angular.module('BasicApp', [
  'ngRoute',
  'ngStorage',
  'restangular',
  'api.services',
  'main.controller',
  'posts.controller',
  'posts.directives',
  'post.controller',
  'post.directives',
  'modal.directives',
  'dropdown.directives'
])

// Restangular setup
.config(['RestangularProvider', function (RestangularProvider) {
  RestangularProvider.setBaseUrl("/api");
}])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider
    .when("/", {
      templateUrl: "partials/posts/posts.html",
      controller: "PostsCtrl",
      controllerAs: "posts"
    })
    .when("/post/:_id", {
      templateUrl: "partials/posts/post/post.html",
      controller: "PostCtrl",
      controllerAs: "post"
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
