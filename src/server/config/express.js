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

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(cookieParser());
  app.use(compress());
  console.log(config.root + '/public');
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());



  initControllers(app, config);

};


/**
 * Initliaze controllers
 */
function initControllers(app, config) {
  let controllers = glob.sync(config.root + '/server/controllers/*.js');

  controllers.forEach(controller => require(controller).default(app));
}

module.exports = initialize;
