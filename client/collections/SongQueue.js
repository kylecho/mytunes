// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  nextSong: function() {
    return this.shift();
  },

  initialize: function() {
  },

  addSong: function(song) {
    this.push(song);
  }

});