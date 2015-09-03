// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> \
                        <td class="title"><%= title %></td> \
                        <td><%= playCount %></td> \
                        <td> \
                          <button class="play mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Play</button> \
                          <button class="enqueue mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Enqueue</button> \
                        </td>'),

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .enqueue': function() {
      this.model.enqueue();
    },
    'click .title': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
