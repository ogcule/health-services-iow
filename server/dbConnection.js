import promise from 'bluebird';
//pg-promises connection
const initOptions = {
  // Initialization Options
  promiseLib: promise
};
const pgp = require('pg-promise')(initOptions);
// when using heroku use their database when using locally use local postgres database
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/services';
console.log('The database you are connected to :', connectionString);
// create database object
const db = pgp(connectionString);

export {db}
