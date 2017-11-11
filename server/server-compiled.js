'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use(_express2.default.static(_path2.default.join(__dirname, 'dist')));

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function (error) {
  return error ? console.error(error) : console.info('Listening on port ' + PORT + '. Visit http://localhost:' + PORT + '/ in your browser.');
});
