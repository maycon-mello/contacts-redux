import { ContactListModel } from '../src/model/ContactListModel';
import { assert } from 'chai';


describe('Contact List Model', function() {
  this.timeout(40000);

  describe('list', function() {
    let list;

    beforeEach(function(done) {
      new ContactListModel().subscribe(function(result) {
        list = result;
        done();
      });
    });

    it('size', function() {
      assert.equal(true, list.length <= 10);
    });
  });

});
