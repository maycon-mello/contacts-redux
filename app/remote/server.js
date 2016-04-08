import express from 'express';
import config from './config/config';
import glob from 'glob';
import mongoose from 'mongoose';
import initExpress from './config/express';

initDB();
initModels();

let app = express();

initExpress(app, config);

app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});



/**
 * Initiliaze mongoose
 */
function initDB() {
  mongoose.connect(config.db);
  let db = mongoose.connection;

  db.on('error', ()  => {
    throw new Error('unable to connect to database at ' + config.db);
  });
}

/**
 * Initiliaze modles
 * require js files from models directory
 */
function initModels() {
  let models = glob.sync(config.root + '/models/*.js');
  models.forEach((model) => {
    require(model);
  });
}
