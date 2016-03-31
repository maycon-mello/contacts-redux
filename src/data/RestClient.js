
import request from 'superagent';

const BASE_URL = 'http://127.0.0.1:5050'

module.exports =  {

  get: (resource) => {
    return new Promise((resolve, reject) => {
      request
        .get(BASE_URL + resource)
        .end(function(err, res) {
          if (err) {
            reject(err);
            return;
          }
          resolve(res.body);
        });
    });
  }
}
