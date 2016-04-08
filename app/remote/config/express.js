import express from 'express';
import cookieParser from 'cookie-parser';
import glob from 'glob';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import config from './config';

function initialize(app, config) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(cookieParser());
  app.use(compress());
  app.use(methodOverride());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  initControllers(app, config);
};


/**
 * Initliaze controllers
 */
function initControllers(app, config) {
  glob.sync(config.root + '/controllers/*.js')
      .forEach(controller => require(controller).default(app));
}

module.exports = initialize;
