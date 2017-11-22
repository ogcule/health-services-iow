require('dotenv').config();
import promise from 'bluebird';
//pg-promises connection
const initOptions = {
  // Initialization Options
  promiseLib: promise
};
const pgp = require('pg-promise')(initOptions);
// when using heroku use their database when using locally use local postgres database
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/services`;
console.log('The database you are connected to :',
connectionString  === process.env.DATABASE_URL ? connectionString : 'local postgres database');
// create database object
const db = pgp(connectionString);

export {db}
