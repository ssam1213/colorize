// Local import
const db = require('../../db');
const queryStr = require('../../db/Items/Detail');

const detail = function(queryStr, cb) {
  db.query(queryStr, function(err, rows) {
    console.log('[model     ] fetch rows from items table in database...');
    cb(err, rows)
  })
}

module.exports = detail;
