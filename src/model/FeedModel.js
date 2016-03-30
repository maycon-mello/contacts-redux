import NoteModel from './NoteModel';
import Database from '../Database';

var subscribers = [];
var subscriberId = 0;
var feed;
let filter = {
  content: '',
  tags: [],
};

function unsubscribe(idx) {
  return function() {
    console.log('Unsubscribe');
  }
}

function notify(subscriber) {
  subscriber.callback.call(subscriber.reference, feed);
}

let Model = {

  subscribe: function(reference, callback) {
    let id = subscriberId++;
    let subscriber = {
      id: id,
      reference: reference,
      callback: callback,
    }
    subscribers.push(subscriber);
    notify(subscriber);
    return unsubscribe(id)
  },

  notifyAll: function() {
    subscribers.forEach(function(subscriber) {
      notify(subscriber);
    });
  },

  onChange: function() {
    feed = NoteModel.getNotes(filter);
    this.notifyAll();
  },

  setFilter: function(text) {
    filter.content = text;
    this.onChange();
  },

  addFilterTag: function(tag) {
    filter.tags.push(tag);
    this.onChange();
  },

  getFilterTags: function() {
    return filter.tags;
  },

  removeFilterTag: function(tag) {
    let newTags = [];
    filter.tags.forEach(function(t) {
      if (t !== tag) {
        newTags.push(t);
      }
    });
    filter.tags = newTags;
    this.onChange();
  },

  getTags: function(callback) {
    Database.getTags(callback);
  }

}

NoteModel.subscribe(Model, Model.onChange);

module.exports = Model;
