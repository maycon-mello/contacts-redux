import assert from 'assert';
import should from 'should';
import request from 'supertest';

const url = 'http://127.0.0.1:9000';

describe('Contact', function() {
  it('Retrive contact list', function() {
    request(url)
  	.get('/contacts')
  	.end(function(err, res) {
        if (err) {
          throw err;
        }
        console.log(res);
        // this is should.js syntax, very clear
        res.should.have.status(200);
        res.body.should.have.property('_id');
        //assert.equal(8, res.length);
        done();
      });
  });
});

//
// http://localhost:9000/contacts?page=0
