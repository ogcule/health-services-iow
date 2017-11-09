import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(expressValidator());
// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});

/* enable CORS on ExpressJS to solve error
- No 'Access-Control-Allow-Origin' header is present on the requested resource.*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);


app.listen(port, () => {
  console.log('express server listening on port ' + port);
});
