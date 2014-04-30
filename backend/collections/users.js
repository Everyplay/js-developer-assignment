var serverbone = require('serverbone');
var models = require('../models');
var config = require('../config');

var Users = serverbone.collections.ACLCollection.extend({
  type: 'users',
  model: models.User,
  db: config.store,
  sync: config.store.sync
});

module.exports = Users;