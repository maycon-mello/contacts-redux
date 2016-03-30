import express from 'express';
import { currentEnvConfig as envConfig } from './config/config';
import glob from 'glob';
import mongoose from 'mongoose';
import initExpress from './config/express';

initDB();
initModels();

let app = express();

initExpress(app, envConfig);

app.listen(envConfig.port, () => {
  console.log('Express server listening on port ' + envConfig.port);
});

/**
 * Initiliaze mongoose
 */
function initDB() {
  mongoose.connect(envConfig.db);
  let db = mongoose.connection;

  db.on('error', ()  => {
    throw new Error('unable to connect to database at ' + envConfig.db);
  });
}

/**
 * Initiliaze modles
 * require js files from models directory
 */
function initModels() {
  let models = glob.sync(envConfig.root + '/models/*.js');
  models.forEach((model) => {
    require(model);
  });
}
