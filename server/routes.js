'use strict';

const
	express = require('express'),
	router =  express.Router(),
	path = require('path');

const
	posts = require('./post/post.controller');

/*
Following Ember URL Conventions

Find	GET	/photos/123
Find All	GET	/photos
Update	PUT	/photos/123
Create	POST	/photos
Delete	DELETE	/photos/123
*/

router.get('/api/post/:_id', posts.get);
router.get('/api/posts', posts.list);
router.put('/api/post/:_id', posts.edit);
router.post('/api/posts', posts.add);
router.delete('/api/post/:_id', posts.del);
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


module.exports = router;
