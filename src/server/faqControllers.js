import {db} from './dbConnection';

function getAllFaq(req, res, next) {
  db.any('select * from faq').then(function(data) {
    res.status(200).json(data);
  }).catch(function(err) {
    return next(err);
  });
}

// get service by id
function getFaq(req, res, next) {
  var faqID = parseInt(req.params.id);
  db.one('SELECT * FROM faq WHERE id = $1', faqID)
    .then(function(data) {
    res.status(200).json(data);
  }).catch(function(err) {
    return next(err);
  });
}

function createFaq(req, res, next) {
  let newService = req.body;
  // use db.none if no returning data or use db.one if using returning data
  db.one('INSERT INTO faq(question, answer) values($1, $2) RETURNING id',
    [newService.question, newService.answer])
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateFaq(req, res, next) {
  let faq = req.body;
  db.one('update faq set question=$1, answer=$2 where id=$3 RETURNING id',
    [faq.question, faq.answer, parseInt(req.params.id)])
    .then(function (data) {
      res.status(200)
        .json(data.id);
    })
    .catch(function (err) {
      return next(err);
    });
}
function removeFaq(req, res, next) {
  let faqId = req.params.id;
  db.result('delete from faq where id = $1' , faqId, r => r.fields)
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}
export {getAllFaq, getFaq, createFaq, updateFaq, removeFaq}
