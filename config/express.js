var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

module.exports = function( app, config ){

    app.locals.pretty = true;
    app.set('port', config.port );

    // view engine setup
    app.set('views', path.join( config.rootPath, '/server/views'));
    app.set('view engine', 'jade');

    app.use(favicon());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(express.static(path.join( config.rootPath, 'public')));    
}