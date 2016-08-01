var pgp = require('pg-promise')();

var connection = {
  database: 'test',
  user: 'root',
  password: 'z3gr1nch'
};

module.exports = pgp(connection);
