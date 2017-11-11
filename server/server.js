import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import expressValidator from 'express-validator';
import routes from './routes';

const app = express();
app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* app.use(express.static(path.join(__dirname, '..', 'dist')));
path when not in production mode */
// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('dist'));
app.use(expressValidator());
/* enable CORS on ExpressJS to solve error
- No 'Access-Control-Allow-Origin' header is present on the requested resource. */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
/* Always return the main index.html, so react-router render the route in the client, uses
regex to have all routes other than api return main index.html */
app.get(/^\/(?!api).*/, (req, res) => {
  /* res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  path when no in production mode */
  res.sendFile(path.resolve('dist','index.html'));
});
// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .json({
      status: 'error',
      message: err.message,
    });
  next();
});

routes(app);


http.createServer(app).listen(app.get('port'), () => {
  console.log('express server listening on port ', app.get('port'));
});
