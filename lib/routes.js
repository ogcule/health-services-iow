'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _check = require('express-validator/check');

var _hsControllers = require('./hsControllers');

var services = _interopRequireWildcard(_hsControllers);

var _faqControllers = require('./faqControllers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = function routes(app) {
  app.get('/api/service/:category', services.getServicesByCategory);
  app.get('/api/service', function (req, res) {
    return console.log('All services called', req.params.category);
  });
  app.post('/api/service', [(0, _check.check)('name', 'Please enter a name for the service').isLength({ min: 1 }), (0, _check.check)('description', 'Please enter a description').isLength({ min: 1 }), (0, _check.check)('address', 'Please enter an address').isLength({ min: 1 }), (0, _check.check)('email').isEmail().withMessage('Must be a valid email address').trim().normalizeEmail(), (0, _check.check)('telephone').matches(/^\+?(?:\d\s?){10,12}$/).withMessage('Please provide a valid telephone number'), (0, _check.check)('postcode').matches(/^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/).withMessage('Please provide a postcode'), (0, _check.check)('weblink', 'Use correct URL').isURL(), (0, _check.check)('image', 'Use correct URL').isURL()], function (req, res, next) {
    var errors = (0, _check.validationResult)(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ error: errors.mapped() });
    }
    next();
  }, services.createService);
  app.put('/api/service/:id', services.updateService);
  app.delete('/api/service/:name', services.removeService);

  app.get('/api/faq', _faqControllers.getAllFaq);
  app.get('/api/faq/:id', _faqControllers.getFaq);
  app.post('/api/faq', [(0, _check.check)('question', 'Please enter a question').isLength({ min: 1 }), (0, _check.check)('answer', 'Please enter an answer').isLength({ min: 1 })], function (req, res, next) {
    var errors = (0, _check.validationResult)(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ error: errors.mapped() });
    }
    next();
  }, _faqControllers.createFaq);
  app.put('/api/faq/:id', _faqControllers.updateFaq);
  app.delete('/api/faq/:id', _faqControllers.removeFaq);
};

exports.default = routes;