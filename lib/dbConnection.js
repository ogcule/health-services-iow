'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//pg-promises connection
var initOptions = {
  // Initialization Options
  promiseLib: _bluebird2.default
};
var pgp = require('pg-promise')(initOptions);
// when using heroku use their database when using locally use local postgres database
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/services';
console.log('The database you are connected to :', connectionString);
// create database object
var db = pgp(connectionString);

exports.db = db;