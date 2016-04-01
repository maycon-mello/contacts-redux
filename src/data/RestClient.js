
import request from 'superagent';

const BASE_URL = 'http://' + window.location.host

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
