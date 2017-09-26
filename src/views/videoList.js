var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('parse', this.reRenderVideoList, this);
    // this.collection.on('reset', this.reRenderVideoList, this);
  },  

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderEntry, this);
    return this;
  },

  renderEntry: function(video) {
    // debugger;
    // HOW WOULD I PASS IN DATA HERE?
    // var videoModel = new Video(video); 
    // var videoListEntryView = new VideoListEntryView({model: viewModel});
    var videoListEntryView = new VideoListEntryView({model: video});  
    // this.collection.on('sync', () => {this.collection.first().select()});
    this.$el.find('.video-list').append(videoListEntryView.$el);
    videoListEntryView.render();
  },

  reRenderVideoList: function() {
    // debugger;
    console.log('reRenderVideoList Called!');
    this.render();
  },

  template: templateURL('src/templates/videoList.html')

});


