import promise from 'bluebird';
//pg-promises connection
const initOptions = {
  // Initialization Options
  promiseLib: promise
};
const pgp = require('pg-promise')(initOptions);
// const connectionString = 'postgres://localhost:5432/services';
const connectionString = 'process.env.DATABASE_URL';
// create database object
const db = pgp(connectionString);

export {db}
