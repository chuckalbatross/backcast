//PURPOSE OF THIS SPRINT
//GETTING USED TO MODELS, VIEWS, CONTROLLERS
//MODELS MANIPULATE THE DATA (APPLICATION STATE)
//VIEWS MANIPULATE THE DOM TO REFLECT CHANGES IN MODEL STATE
//CONTROLLERS LISTEN TO EVENTS ON THE DOM (CLICK) AND TRIGGER FUNCTIONS W/IN MODELS TO UPDATE THEMSELVES

//IN BACKBONE (VIEWS AND COLLECTIONS) ALSO PLAY ROLE OF CONTROLLER

//EVENT LISTENERS (RATHER THAN LOOPING/POLLING TO CHECK IF AN EVENT HAS HAPPENED) SHOULD LISTEN FOR AN EVENT. THE CONTROL RESPONSIBLE FOR THE EVENT SENDS A NOTIFICATION TO THE LISTENER (infant.cry example)



var AppView = Backbone.View.extend({

  el: '#app',
  // collection: this.videos,

  initialize: function() {
    // this.videos = new Videos(window.exampleVideoData);


    //don't initialize with sample data. initialize with defacto query --- DOESN'T WORK BECAUSE ASYNC CALL HAPPENS AFTER APP ASSIGNS THIS.COLLECTION TO EMPTY COLLECTION
    // this.videos = new Videos();
    // this.videos.search('kitty');
    this.videos = new Videos(window.exampleVideoData);
    this.collection = this.videos;

    this.searchView = new SearchView({collection: this.collection});
    this.videoListView = new VideoListView({collection: this.collection});
    this.videoPlayer = new VideoPlayerView({collection: this.collection});

    // this.collection.on('select', this.renderNewVideo, this);

    this.render();
  },

  render: function() {
    // var searchView = new SearchView();
    // var searchViewThis = searchView.render();
    // this.$el.html(this.template(searchViewThis));
    this.$el.html(this.template());
    this.$el.find('.search').append(this.searchView.$el);
    this.searchView.render();
    this.$el.find('.player').append(this.videoPlayer.$el);
    this.videoPlayer.render();
    this.$el.find('.list').append(this.videoListView.$el);
    this.videoListView.render();
    return this;
  },

  // renderNewVideo: function() {
  //   console.log('renderNewVideo Called!');
  // },

  template: templateURL('src/templates/app.html')

});
