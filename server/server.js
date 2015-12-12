'use strict';

const
	express = require('express'),
	app =  express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	path = require('path');

const
	config = require('./config'),
	router = require('./routes'),
	middleware = require('./middleware'),
	db = require('./db.js');

app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', router);

app.listen(config.site.port, function() {
	console.log('Basic API listening on port', config.site.port);
});
