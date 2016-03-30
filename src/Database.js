import Server from './data/NoteWSClient';

var data = [];
let dataLoaded = false;
let subscribers = [];








let Database = {


  getList: function(filter) {
    if (!filter) {
      return notes;
    }
    //let result = applyTagFilter(notes, filter.tags);
    return data;//applyContentFilter(result, filter.content);
  },

  add: function(n) {
    Server.POST(n, function(note) {
      notes = [note].concat(notes);
      Database.notifyAll();
    });
  },

  update: function(n) {
    Server.PUT(n, function(note) {
      let i = getNoteIndex(n);
      notes[i] = note;
      Database.notifyAll();
    });
  },

  remove: function(n) {
    Server.DELETE(n._id, function(note) {
      let i = getNoteIndex(n);
      notes.splice(i, 1);
      Database.notifyAll();
    });
  },

  subscribe: function(subscriber) {
    subscribers.push(subscriber);
  },

  notifyAll: function() {
    subscribers.forEach(function(subscriber) {
      subscriber.notifyAll();
    })
  },

  getTags: function(callback) {
    Server.GETTags(callback);
  }
}

Server.GET(null, function(data) {
  notes = data;
  Database.notifyAll();
});

module.exports = Database;
