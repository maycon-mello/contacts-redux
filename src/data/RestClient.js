
import request from 'superagent';

const BASE_URL = 'http://' + window.location.hostname + ':6060'

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
