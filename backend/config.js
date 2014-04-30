var BackboneDb = require('backbone-db');
exports.store = new BackboneDb('localdb');
exports.listen_port = 9999;