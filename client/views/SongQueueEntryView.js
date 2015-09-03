// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'div',

  template: _.template('<div>(<%= artist %>)</div> \
                        <div><%= title %></div> \
                        <div> \
                          <button class="dequeue mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Dequeue</button> \
                        <div>'),

  events: {
    'click .dequeue': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
