'use strict';

const
	Promise = require('bluebird'),
	mongoose = require('mongoose');

Promise.promisifyAll(mongoose);

const
  Post = require('./post.model');

exports.list = function (req, res) {
  let criteria = {
    showHidden: 0
  };
  criteria = req.query;

  Post.list(criteria).then(function (posts) {
    res.json(posts)
      .status(200).end();

  }, function (err) {
    res.json({
        error: 'No data',
        details: 'No posts Found ',
        message: err.message
      })
      .status(200).end();
  });
};

exports.get = function (req, res) {
  let objectId = req.params._id;

  Post.get(objectId)
    .then(function (posts) {
      res.json(posts)
        .status(200).end();

    }, function (err) {
      res.json({
          error: 'Bad Request',
          details: 'Post Not Found.',
          message: err.message
        })
        .status(404).end();
    });
};

exports.add = function (req, res) {
  let post = new Post(),
    attributes = JSON.parse(JSON.stringify(req.body));

  post.set(attributes);

  Post.add(post)
    .then(function (post) {
      console.log('New Post Created:', post);
      res.json(post)
        .status(201).end();

    }, function (err) {
      res.json({
          error: 'Bad Request',
          details: 'Post cannot be added.',
          message: err.message
        })
        .status(422).end();
    });
};

exports.del = function (req, res) {
  let objectId = req.params._id;

  Post.del(objectId)
    .then(function (id) {
      res.status(204).end();

    }, function (err) {
      res.json({
          error: 'Bad Request',
          details: 'Post cannot be deleted, ' + err.message
        })
        .status(400).end();
    });
};

exports.edit = function (req, res) {
  let objectId = req.params._id,
    attributes = JSON.parse(JSON.stringify(req.body));

  Post.edit(objectId, attributes)
    .then(function (post) {
			res.json({ success: post, details: 'Post ' + post._id + ' changed'})
        .status(200).end();

    }, function (err) {
      res.json({
          error: 'Bad Request',
          details: 'Post cannot be edited, ' + err.message
        })
        .status(400).end();
    });
};
