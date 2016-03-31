import WS from '../src/data/RestClient';
import { assert } from 'chai';
import jquery from 'jquery';

describe('Rest Client', function() {
  this.timeout(20000);

  describe('Get contacts', function() {
    let list;

    beforeEach(function(done) {
      WS.get('/contacts').then(result => {
        list = result;
        done()
      });
    });

    it('list size', function() {
      assert.equal(true, list.length <= 10);
    });

    it('list item properties', function() {
      let item = list[0];
      assert.property(item, '_id');
      assert.property(item, 'name');
      assert.property(item, 'address');
      assert.property(item, 'city');
      assert.property(item, 'state');
    });
});


});
