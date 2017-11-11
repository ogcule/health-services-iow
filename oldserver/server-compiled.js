'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
/* app.use(express.static(path.join(__dirname, '..', 'dist')));
path when not in production mode */
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(_express2.default.static('dist'));
app.use((0, _expressValidator2.default)());
/* enable CORS on ExpressJS to solve error
- No 'Access-Control-Allow-Origin' header is present on the requested resource. */
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
/* Always return the main index.html, so react-router render the route in the client, uses
regex to have all routes other than api return main index.html */
app.get(/^\/(?!api).*/, function (req, res) {
  /* res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  path when no in production mode */
  res.sendFile(_path2.default.resolve('dist', 'index.html'));
});
// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message
  });
  next();
});

(0, _routes2.default)(app);

app.listen(PORT, function () {
  console.log('express server listening on port ', app.get('port'));
});
