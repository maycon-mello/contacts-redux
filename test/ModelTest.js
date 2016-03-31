import Model from '../src/model/Model';
import assert from 'assert';

let model = new Model();

describe('Model class', function() {

  it('subscribe', function() {
    assert.equal(0, model.getListeners().length);
    let unsubscribe = model.subscribe(function(){});
    assert.equal(1, model.getListeners().length);
    unsubscribe();
    assert.equal(0, model.getListeners().length);
  });

  it('notify', function() {
    let number = 0;
    let unsubscribe = model.subscribe(function(val){
      number = val;
    });
    model.notify(5);
    assert.equal(5, number);
  });

});
