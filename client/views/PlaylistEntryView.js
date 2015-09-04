var PlaylistEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> \
                        <td><%= title %></td> \
                        <td> \
                          <button class="remove mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">-</button> \
                        <td>'),

  events: {
    'click .remove': function() {
      this.model.remove();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
