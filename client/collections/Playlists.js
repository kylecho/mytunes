var Playlist = SongQueue.extend({

  model: SongModel,

  // name: 'playlist',

  initialize: function() {
  },

  selectPlaylist: function() {
    this.trigger('select', this);
  }

});