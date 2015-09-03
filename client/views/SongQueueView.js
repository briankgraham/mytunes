// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  events: {
    // 'click' : function () {
    //   this.collection.remove(this.model);
    // }
  },

  initialize: function() {
    this.collection.on('add', this.render ,this);
    this.collection.on('dequeue', this.render, this);
    this.render();
  },

  render: function() {

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
