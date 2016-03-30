import assert from 'assert';
import util from '../src/server/util';

describe('Server util', function() {
  it('number.zeroFill', function() {
    assert.equal('001', util.number.zeroFill(1, 3));
  });
});
