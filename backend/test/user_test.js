var models = require('../models');
var collections = require('../collections');
var should = require('chai').should();

describe('User tests', function() {
  var user;

  it('should save a User', function() {
    user = new models.User({
      username: 'foouser',
      password: 'supersecRet',
      description: 'hello world'
    });
    return user.save();
  });

  it('plaintext password should not be saved', function() {
    return user
      .fetch()
      .then(function() {
        user.get('password').should.not.equal('supersecRet');
      });
  });

  it('should list users', function() {
    var users = new collections.Users();
    return users
      .fetch()
      .then(function() {
        users.length.should.equal(1);
      });
  });
});
