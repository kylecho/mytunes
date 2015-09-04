var PlaylistManager = Backbone.Collection.extend({
  collection: Playlist,

  addPlaylist: function(playlist) {
    this.playlists.push(playlist);
    var self = this;
    playlist.on('select', function() {
      self.trigger('select', this);
    });
  },

  initialize: function() {
    this.playlists = [];
  }

});