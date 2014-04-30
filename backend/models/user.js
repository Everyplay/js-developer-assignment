var serverbone = require('serverbone');
var config = require('../config');

var schema = {
  id: 'schema/user',
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    roles: {
      type: 'array',
      default: []
    }
  }
};

var User = serverbone.models.ACLModel.extend({
  schema: schema,
  type: 'user',
  db: config.store,
  sync: config.store.sync
  /**
   * checkPassword
   *
   * This function should be implemented.
   * @returns {Boolean} true if password was correct, false if not
   */

  /**
   * addRoles
   *
   * This function should be implemented.
   *
   * Roles are unique, thus adding same role twice should not add it to roles twice.
   * Usage:
   * addRoles('a') -> adds role 'a'
   * addRoles('b', 'c') -> adds roles 'b' & 'c'
   * addRoles(['c', 'd', 'e']) -> adds roles 'd' & 'e'
   */
});

module.exports = User;