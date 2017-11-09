import {db} from './dbConnection';

function getAllServices(req, res, next) {
  db.any('select * from service').then(function(data) {
    res.status(200).json(data);
  }).catch(function(err) {
    return next(err);
  });
}

// get service by id
function getSingleService(req, res, next) {
  var serviceID = parseInt(req.params.id);
  db.one('SELECT * FROM service WHERE id = $1', serviceID)
    .then(function(data) {
    res.status(200).json(data);
  }).catch(function(err) {
    return next(err);
  });
}

function createService(req, res, next) {
  let newService = req.body;
  // use db.none if no returning data or use db.one if using returning data
  db.one('INSERT INTO service(name, category, description, image, link, email, telephone, address, rcgp, postcode) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id',
    [newService.name, newService.category, newService.description, newService.image, newService.weblink, newService.email, newService.telephone, newService.address, newService.rcgpCategory, newService.postcode])
    .then(function (data) {
      res.status(200)
        .json(data.id);
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateService(req, res, next) {
  let service = req.body;
  db.none('update service set name=$1, category=$2, description=$3 where id=$4',
    [service.name, service.category, service.description, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: `Updated service`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
function removeService(req, res, next) {
  let serviceName = req.params.name;
  db.result('delete from service where name = $1', serviceName)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${serviceName} service`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
export {getAllServices, getSingleService, createService, updateService, removeService}
