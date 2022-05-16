const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      
      express      = require('express'),
      favicon      = require('serve-favicon'),
      logger       = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser   = require('body-parser'),
      env          = process.env,

      routes = require('./routes/index'),
      users = require('./routes/users')

var app = express();

app.locals.pretty = true;  

app.set('port', env.PORT || 8080);
app.set('ipaddress', env.OPENSHIFT_NODEJS_IP);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
* Old Way
* ** ** ** ** ** ** **/
//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

/* ** ** ** ** ** ** **
* App Server Listening
* ** ** ** ** ** ** **/
app.listen(app.get('port'), app.get('ipaddress'), function() {  
      console.log("Node app is running at localhost:" + app.get('port'))
});
