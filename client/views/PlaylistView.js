var PlaylistView = Backbone.View.extend({

  tagName: "table",

  // template: _.template(),

  events: {
    'click .selectPlaylist': function(){
      this.collection.selectPlaylist();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<th>' + this.collection.name + '</th>');
    this.$el.append('<button class="selectPlaylist">Select</button>');
    this.$el.append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );

    return this.$el;
  }
})