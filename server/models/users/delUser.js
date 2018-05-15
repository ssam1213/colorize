// Local import
const db = require('../../db');
const queryStr = require('../../db/Users/DelUser');

const delUser = function(queryStr, cb) {
  db.query(queryStr, function(err, rows) {
    console.log('[model     ] fetch rows from users table in database...');
    cb(err, rows)
  })
}

module.exports = delUser;