var Videos = Backbone.Collection.extend({

  model: Video,

  // initialize: function() {
  //   this.on('click', this.select, this);
  // },

  // select: function() {
  //   console.log('Video Collection Selected')
  // }

  // events: {
  //   'select': 'handleSelect'
  // },

  //DON'T NEED BELOW BECAUSE IT SETS OFF ON MODEL (COLLECTIONS FUNCTIONALITY FOR BACKBONE)
  // initialize: function() {
  //   this.on('select', this.handleSelect, this);
  // },

  // handleSelect: function() {
  //   this.trigger('handleSelect', this);
  //   console.log('Collection handleSelect Called');
  // },


  // events: {
  //   'sync': 
  // }



  search: function (searchTerm) {
    console.log(window.YOUTUBE_API_KEY);
    this.fetch({
      // reset: true,
      data: {
        q: searchTerm,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video'
      },

      success: (function() {
        console.log('success');
      }),

      error: (function(e) {
        console.log('error :', e);
      }),

    });
  },


  url: 'https://www.googleapis.com/youtube/v3/search',

  parse: function(data) {
    // var searchCollection = new Videos(data.items);

    //if this.models is empty (when first initializing collection), iterate and push ---- DOESN'T WORK BECAUSE ASYNC CALL HAPPENS AFTER APP ASSIGNS THIS.COLLECTION TO EMPTY COLLECTION
    // if (this.models.length === 0) {
    //   for (var i = 0; i < data.items.length; i++) {
    //     this.models.push(data.items[i]);
    //   } 
    // } else {
    //   for (var i = 0; i < data.items.length; i++) {
    //     this.models[i] = data.items[i];
    //   }
    // }
    for (var i = 0; i < this.length; i++) {
      this.models[i] = data.items[i];
      //create attribute property and copy snippet over to it
      this.models[i].attributes = {};
      this.models[i].attributes.snippet = this.models[i].snippet;
    }
    this.trigger('parse', this);
    console.log('parse entered');
    console.log('data is: ', data);
  }










  // search: function (searchTerm) {
      // url = 'https://www.googleapis.com/youtube/v3/search';
      // console.log(this.YOUTUBE_API_KEY);
      // var params = {
      //     part: 'snippet',
      //     key: this.YOUTUBE_API_KEY,
      //     videoEmbeddable: true,
      //     type: 'video',
      //     q: searchTerm
      // };
      // // console.log(data);
      // // console.log(response);
      // success = function(data) {
      //   console.log('Success');
      //   console.log(data);
      // };
      // failure = function(data) {
      //   console.log('Failure');
      //   console.log(data);
      // };
  //     $.getJSON(url, params, function (data) {
  //         console.log(data);
  //         this.parse(data);
  //     });

  // },

  // parse: function(data) {
  //   // this.trigger('parse', this);
  //   console.log('Parse Called');
  //   console.log(data);
  //   return data.items;
  // },

  // error: function(model, response, options) {
  //   console.log(model);
  //   console.log(response);
  //   console.log(options);
  // }

  // url: 'https://www.googleapis.com/youtube/v3/search',

  // parse: function(response) {
  //     return response.results;
  // },

  // sync: function(method, model, options) {
  //     var that = this;
  //     var params = _.extend({
  //         type: 'GET',
  //         part: 'snippet',
  //         dataType: 'jsonp',
  //         url: that.url,
  //         processData: false
  //     }, options);

  //     return $.ajax(params);
  // }







});
