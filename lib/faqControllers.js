'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFaq = exports.updateFaq = exports.createFaq = exports.getFaq = exports.getAllFaq = undefined;

var _dbConnection = require('./dbConnection');

var getAllFaq = function getAllFaq(req, res, next) {
  _dbConnection.db.any('select * from faq').then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};

// get service by id
var getFaq = function getFaq(req, res, next) {
  var faqID = parseInt(req.params.id);
  _dbConnection.db.one('SELECT * FROM faq WHERE id = $1', faqID).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};

var createFaq = function createFaq(req, res, next) {
  var newService = req.body;
  // use db.none if no returning data or use db.one if using returning data
  _dbConnection.db.one('INSERT INTO faq(question, answer) values($1, $2) RETURNING id', [newService.question, newService.answer]).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};

var updateFaq = function updateFaq(req, res, next) {
  var faq = req.body;
  _dbConnection.db.one('update faq set question=$1, answer=$2 where id=$3 RETURNING id', [faq.question, faq.answer, parseInt(req.params.id)]).then(function (data) {
    res.status(200).json(data.id);
  }).catch(function (err) {
    return next(err);
  });
};
var removeFaq = function removeFaq(req, res, next) {
  var faqId = req.params.id;
  _dbConnection.db.result('delete from faq where id = $1', faqId, function (r) {
    return r.fields;
  }).then(function (data) {
    res.status(200).json(data);
  }).catch(function (err) {
    return next(err);
  });
};
exports.getAllFaq = getAllFaq;
exports.getFaq = getFaq;
exports.createFaq = createFaq;
exports.updateFaq = updateFaq;
exports.removeFaq = removeFaq;