// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td id="artist"><%= artist %></td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      //console.log(JSON.stringify(this.model.attributes));
      localStorage.setItem('queue', JSON.stringify(this.model.attributes));
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
