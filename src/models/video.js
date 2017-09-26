var Video = Backbone.Model.extend({

  // defaults: {
  //   flag: 0
  // },

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // this.set('select', this.select);
  },

  select: function() {
    console.log('Video Model Selected');
    this.trigger('select', this);
  }

});


//"4WJLlWpzpP0"