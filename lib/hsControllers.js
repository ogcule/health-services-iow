'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeService = exports.updateService = exports.createService = exports.getSingleService = exports.getAllServices = undefined;

var _dbConnection = require('./dbConnection');

var getAllServices = function getAllServices(req, res, next) {
  _dbConnection.db.any('select * from service').then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};

// get service by id
var getSingleService = function getSingleService(req, res, next) {
  var serviceID = parseInt(req.params.id);
  _dbConnection.db.one('SELECT * FROM service WHERE id = $1', serviceID).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};

var createService = function createService(req, res, next) {
  var newService = req.body;
  // use db.none if no returning data or use db.one if using returning data
  _dbConnection.db.one('INSERT INTO service(name, category, description, image, link, email, telephone, address, rcgp, postcode) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id', [newService.name, newService.category, newService.description, newService.image, newService.weblink, newService.email, newService.telephone, newService.address, newService.rcgpCategory, newService.postcode]).then(function (data) {
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
exports.getSingleService = getSingleService;
exports.createService = createService;
exports.updateService = updateService;
exports.removeService = removeService;