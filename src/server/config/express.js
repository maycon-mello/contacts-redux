import express from 'express';
import glob from 'glob';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
// import Auth from './auth';
import { currentEnv } from './config';

function initialize(app, config) {
  app.locals.ENV = currentEnv;
  app.locals.ENV_DEVELOPMENT = currentEnv == 'development';

  // app.set('views', config.root + '/app/views');
  // app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(cookieParser());
  app.use(compress());
  console.log(config.root + '/public');
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());

  // Authentication with passport
  //Auth(app);

  initControllers(app, config);

  //app.use(errorHandler);
  //app.use(currentEnv === 'development' ? devErrorHandler : prodErrorHandler)
};

/**
 * Error handler
 */
function errorHandler(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
}

/**
 * Error handler
 */
function prodErrorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error',
  });
}

/**
 * Error handler
 */
function devErrorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err,
    title: 'error',
  });
}

/**
 * Initliaze controllers
 */
function initControllers(app, config) {
  let controllers = glob.sync(config.root + '/server/controllers/*.js');

  controllers.forEach(controller => require(controller).default(app));
}

module.exports = initialize;
