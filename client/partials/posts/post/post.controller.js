'use strict';

angular.module('post.controller', [])
.controller('PostCtrl', ['api', function (api) {
  let ctrl = this;

  ctrl.getPost = function () {
    api.post().get()
    .then(function (post) {
      console.log(post);
      ctrl.title = post.title;
      ctrl.body = post.body;
    })
  };

  ctrl.deletePost = function () {
    api.post().get()
    .then(function (post) {
      post.remove();
    });
  };

  ctrl.updatePost = function () {
    api.post().get()
    .then(function (post) {
      post.put();
    });
  };

  ctrl.getPost();

}]);
