const createError = require('http-errors');
const express      = require('express');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const path         = require('path');

const routes = require('./routes/index');
const users = require('./routes/users');

const app = express();

/* ** ** ** ** ** ** **
Custom Config Begins
* ** ** ** ** ** ** **/
var env    = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config.js.dist')[env]
console.log("~~~~YOU ARE IN: [", env, "] ENVIRONMENT~~~~")

app.locals.pretty = true;
app.set('port', config.port);
app.set('ipaddress', config.ip);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Favicon
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Morgan
app.use(logger('dev'));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* ** ** ** ** ** ** **
* Performance Boost: Concurrent Routing
* ** ** ** ** ** ** **/
function parallel(middlewares) {
  return function (req, res, next) {
    async.each(middlewares, function (mw, cb) {
      mw(req, res, cb);
    }, next);
  };
}

app.use(parallel([
  app.use('/users', users),
  app.use('/', routes)
]));

/* ** ** ** ** ** ** **
* Custom Error handling
* ** ** ** ** ** ** **/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
    //error: {}
  });
});

module.exports = app;

/* ** ** ** ** ** ** **
* App Server Listening
* ** ** ** ** ** ** **/
app.listen(app.get('port'), app.get('ipaddress'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
