import Database from '../Database';
import Util from './NoteUtil';

var subscribers = [];
var subscriberId = 0;
var notes = Database.getNotes();

function unsubscribe(idx) {
  return function() {
    console.log('Unsubscribe');
  }
}

function notify(subscriber) {
  subscriber.callback.call(subscriber.reference, notes);
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

  getNotes: function(filter) {
    return Database.getNotes(filter);
  },

  add: function(content, options) {
    let tags = Util.extractTags(content);
    Database.add({
      content: content,
      createDate: new Date().toString(),
      tags: tags,
      contentType: options.contentType || 1,
      metaData: options.metaData,
    }, this.notifyAll.bind(this));

  },

  remove: function(note) {
    Database.remove(note);
  },

  update: function(note) {
    note.tags = Util.extractTags(note.content);
    Database.update(note, this.notifyAll.bind(this));
  },

}

Database.subscribe(Model);

module.exports = Model;
