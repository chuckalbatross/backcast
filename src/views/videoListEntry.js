var VideoListEntryView = Backbone.View.extend({


  events: {
    'click .video-list-entry-title': 'handleClick'
    // 'parse': 'reRenderVideoList'
  },

  handleClick: function() {
    console.log('VideoListEntryView responded!')
    this.model.select();
  },

  // initialize: function() {
  //   this.model.on('select', this.respond)
  // },

  // select: function() {
  //   console.log('VideoListEntryView selected!')
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
