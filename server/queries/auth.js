let promise = require('bluebird');

let options = {
  // Initialization Options
  promiseLib: promise
};

let pgp = require('pg-promise')(options);
let connectionString = process.env.PG_CONNECTION_URI;
let db = pgp(connectionString);

// add query functions

module.exports = {
};
