import path from 'path';

const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  env: {
    development: {
      root: rootPath,
      app: {
        name: 'admin',
      },
      port: 9000,
      db: 'mongodb://104.236.90.64/danubio',
    },

    test: {
      root: rootPath,
      app: {
        name: 'admin',
      },
      port: 9000,
      db: 'mongodb://104.236.90.64/danubio',
    },

    production: {
      root: rootPath,
      app: {
        name: 'admin',
      },
      port: 9000,
      db: 'mongodb://104.236.90.64/danubio',
    }
  },

  auth: {
    google: {
      clientID: '727594098415-fvhnbqgnkg54sfutds87g39fgkrcfuuk.apps.googleusercontent.com',
      clientSecret: 'Edqdqu9m88WJZJnUv_993mqW',
      callbackURL: 'http://localhost:9000/auth/google/return',
      apiOptions: {
        scope: ['profile', 'email'],
        hd: 'objectedge.com' //Restricted domain
      }
    }
  },

  session: {
    secret: 'Fzi1Hjjs5w,90t)d~;C6V!PtiS4$aLW9`+ <H-|G,6+Ei7<ZIUB+e.[9K)tB@=of'
  }
};

module.exports = {
  env: config.env,
  currentEnv: env,
  currentEnvConfig: config.env[env],
  auth: config.auth,
  session: config.session
};
