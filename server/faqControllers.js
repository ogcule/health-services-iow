import { db } from './dbConnection';

const getAllFaq = (req, res, next) => {
  db.any('select * from faq').then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    return next(err);
  });
}

// get service by id
const getFaq = (req, res, next) => {
  let faqID = parseInt(req.params.id);
  db.one('SELECT * FROM faq WHERE id = $1', faqID)
    .then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    return next(err);
  });
}

const createFaq = (req, res, next) => {
  let newService = req.body;
  // use db.none if no returning data or use db.one if using returning data
  db.one('INSERT INTO faq(question, answer) values($1, $2) RETURNING id',
    [newService.question, newService.answer])
    .then((data) => {
      res.status(200)
        .json(data);
    })
    .catch((err) => {
      return next(err);
    });
}

const updateFaq = (req, res, next) => {
  let faq = req.body;
  db.one('update faq set question=$1, answer=$2 where id=$3 RETURNING id',
    [faq.question, faq.answer, parseInt(req.params.id)])
    .then((data) => {
      res.status(200)
        .json(data.id);
    })
    .catch((err) => {
      return next(err);
    });
}
const removeFaq = (req, res, next) => {
  let faqId = req.params.id;
  db.result('delete from faq where id = $1' , faqId, r => r.fields)
    .then((data) => {
      res.status(200)
        .json(data);
    })
    .catch((err) => {
      return next(err);
    });
}
export {getAllFaq, getFaq, createFaq, updateFaq, removeFaq}
