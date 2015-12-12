'use strict';

angular.module('api.services', [])
.factory('HeaderRestangular', ['Restangular', '$localStorage', function (Restangular, $localStorage) {

  return Restangular.withConfig(function (RestangularConfigurer) {
    if ($localStorage.token !== undefined) {
      RestangularConfigurer.setDefaultHeaders({'Authorization': 'Bearer ' + $localStorage.token });
    }

  });
}])

.factory('api', ['HeaderRestangular', '$routeParams', function (HeaderRestangular, $routeParams) {

  return {
  	posts: function () {
  		return HeaderRestangular.all('posts');
  	},
  	post: function () {
  		return HeaderRestangular.one('post', $routeParams._id);
  	},
    user: function () {
      return HeaderRestangular.one('user');
    }
  }

}]);
