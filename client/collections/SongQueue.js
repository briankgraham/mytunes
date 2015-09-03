// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function() {
    this.on('dequeue', this.dequeue, this);
    this.on('add', this.checkLength, this);
    this.on('ended', this.dequeue, this);
  },

  playFirst: function () {
    
    this.models[0].play();
  },
  
  checkLength: function () {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function () {
    this.shift();
    if (this.models[0]) {
      this.playFirst();
    }
  }

});
