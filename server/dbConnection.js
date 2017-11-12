import promise from 'bluebird';
//pg-promises connection
const initOptions = {
  // Initialization Options
  promiseLib: promise
};
const pgp = require('pg-promise')(initOptions);
// const connectionString = 'postgres://localhost:5432/services';
console.log('The database url is :', process.env.DATABASE_URL)
// when using heroku use their database when using locally use local postgres database
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/services';
// create database object
const db = pgp(connectionString);

export {db}
