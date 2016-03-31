
import request from 'superagent';

const BASE_URL = 'http://127.0.0.1:9000'

module.exports =  {

  get: (resource) => {
    return new Promise((resolve, rejest) => {
      request
        .get(BASE_URL + resource)
        .end(function(err, res) {
          resolve(res.body);
        });
    });
  }
}
