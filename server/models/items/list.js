// Local import
const db = require('../../db');
const query = require('../../db/items/list');

const list = function(query, cb) {
  db.query(query, function(err, rows) {
    console.log('[model     ] fetch rows from items table in database...');
    cb(err, rows)
  })
}

module.exports = list;
