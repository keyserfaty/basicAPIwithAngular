'use strict';

angular.module('posts.controller', [])
.controller('PostsCtrl', ['api', function (api) {
  let ctrl = this;

  ctrl.title = 'Posts';

  ctrl.getPosts = function () {
    api.posts().getList()
    .then(function (posts) {
      ctrl.posts = posts;
    });
  };

  ctrl.addPosts = function () {
    api.posts().getList()
    .then(function (posts) {
      let newPost = {
        title: '',
        body: '',
        author: ''
      };

      posts.save(newPost);
    });
  };

  ctrl.getPosts();

}]);
