'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = undefined;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

//pg-promises connection
var initOptions = {
  // Initialization Options
  promiseLib: _bluebird2.default
};
var pgp = require('pg-promise')(initOptions);
// when using heroku use their database when using locally use local postgres database
var connectionString = process.env.DATABASE_URL || 'postgres://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST + '/services';
console.log('The database you are connected to :', connectionString === process.env.DATABASE_URL ? connectionString : 'local postgres database');
// create database object
var db = pgp(connectionString);

exports.db = db;