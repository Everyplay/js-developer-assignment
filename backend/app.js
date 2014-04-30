var express = require('express');
var bodyParser = require('body-parser');
var serverbone = require('serverbone');
var collections = require('./collections');
var config = require('./config');

var usersResource = new serverbone.resources.Resource('users', {
  collection: collections.Users
});

var app = express();
app.use(bodyParser());
app.use('/users', usersResource.app);

app.listen(config.listen_port);
console.log('listening in port:' + config.listen_port);