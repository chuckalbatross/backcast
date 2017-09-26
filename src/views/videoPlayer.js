var VideoPlayerView = Backbone.View.extend({

  //EVENT LISTENER: when a model runs select
  // initialize: function() {
  //   this.collection.on('select', this.respond);
  // },

  // respond: function() {
  //   console.log('VideoPlayerView Responded');
  // },

  // changeVideo: function() {
    //set flag to element index of chosen video 
    //call render for specific index
  // }

  initialize: function() {
    this.collection.on('select', this.reRender, this);
    // this.collection.on('parse', this.updateList, this);
    this.model = this.collection.models[0];
  },

  render: function(index) {
    // this.$el.html('<div class="loading">Please wait...</div>');
    // this.$el.html(this.template({title:'Star Wars: A Bad Lip Reading', description: 'Soooo frunnnyyy!'}));
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  reRender: function(entry) {
    console.log(entry);
    this.model = entry;
    this.render();
  },

  // updateList: function(entry) {
  //   console.log(entry);
  // },

  template: templateURL('src/templates/videoPlayer.html')

});
