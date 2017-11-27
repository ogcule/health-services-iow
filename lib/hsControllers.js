'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServicesByBoth = exports.getServicesByTags = exports.getServicesByCategory = exports.removeService = exports.updateService = exports.createService = exports.getAllServices = undefined;

var _dbConnection = require('./dbConnection');

var getAllServices = function getAllServices(req, res, next) {
  _dbConnection.db.any('select * from service').then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};

// get services by Category
var getServicesByCategory = function getServicesByCategory(req, res, next) {
  _dbConnection.db.any('SELECT * FROM service WHERE category = $1', req.params.category).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};
// get services by tags, searches for service with tag anywhere in tags array
var getServicesByTags = function getServicesByTags(req, res, next) {
  _dbConnection.db.any('SELECT * FROM service WHERE $1 = ANY (tags)', req.params.tag).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};
// search by both category and tags
var getServicesByBoth = function getServicesByBoth(req, res, next) {
  _dbConnection.db.any('SELECT * FROM service WHERE category = $1 AND $2 = ANY (tags)', [req.params.category, req.params.tag]).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};

var createService = function createService(req, res, next) {
  var newService = req.body;
  /* The following makes sure a string is given when inserting the tags, if array was given you
  would get an array of arrays */
  newService.tags = typeof newService.tags === 'string' ? newService.tags : newService.tags.join(', ');
  // use db.one if no returning data or use db.one if using returning data
  _dbConnection.db.one('INSERT INTO service(name, category, description, image, link, email, telephone, address, rcgp, postcode, tags, referral) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id', [newService.name, newService.category, newService.description, newService.image, newService.weblink, newService.email, newService.telephone, newService.address, newService.rcgpCategory, newService.postcode, '{' + newService.tags + '}', // tags is array in the database
  newService.referral]).then(function (data) {
    res.status(200).json(data.id);
  }).catch(function (err) {
    return next(err);
  });
};

var updateService = function updateService(req, res, next) {
  var service = req.body;
  _dbConnection.db.none('update service set name=$1, category=$2, description=$3 where id=$4', [service.name, service.category, service.description, parseInt(req.params.id)]).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Updated service'
    });
  }).catch(function (err) {
    return next(err);
  });
};
var removeService = function removeService(req, res, next) {
  var serviceName = req.params.name;
  _dbConnection.db.result('delete from service where name = $1', serviceName).then(function () {
    res.status(200).json({
      status: 'success',
      message: 'Removed ' + serviceName + ' service'
    });
  }).catch(function (err) {
    return next(err);
  });
};
exports.getAllServices = getAllServices;
exports.createService = createService;
exports.updateService = updateService;
exports.removeService = removeService;
exports.getServicesByCategory = getServicesByCategory;
exports.getServicesByTags = getServicesByTags;
exports.getServicesByBoth = getServicesByBoth;