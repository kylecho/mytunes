// Will let you manage your playlists
var PlaylistManagerView = Backbone.View.extend({

  tagName: "ul",

  button: _.template('<button class="addPlaylist mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"> \
         <i class="material-icons">add</i> \
       </button>'),

  events: {
    'click .addPlaylist': 'addPlaylist'
  },

  addPlaylist: function(){
    var listName = window.prompt("Enter the name of your playlist");
    var playlist = new Playlist();
    playlist.name = listName;
    this.collection.addPlaylist(playlist);
    this.render();
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html('<lh>Playlist Manager</lh>').append(this.button());
    this.$el.append(
      _.map(this.collection.playlists, function(playlist) {
        return new PlaylistView({collection:playlist}).render();
      })
    );

    return this.$el;
  }

});
