// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  template: _.template('<div> \
                          <span class="title"><%- title %></span> \
                          <span class="artist"><%- artist %></span> \
                        </div> \
                        <audio controls autoplay />'),

  initialize: function() {
  },

  changeSong: function() {
    this.model.ended();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('audio').attr('src', this.model ? this.model.get('url') : '');
    this.$el.find('audio').on('ended', this.model.ended.bind(this.model) );
    return this.$el;
  }

});
