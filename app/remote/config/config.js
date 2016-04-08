import path from 'path';

const rootPath = path.normalize(__dirname + '/../..');

export default {
    root: rootPath,
    app: {
      name: 'admin',
    },
    port: 6060,
    db: 'mongodb://104.236.90.64/danubio',
};
