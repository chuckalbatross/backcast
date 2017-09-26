var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleSearch'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  handleSearch: function(e) {
    console.log('Search Handled!');
    // console.log( $(e.currentTarget).val() ); DON'T WORRY ABOUT EVENT, USE $el TO SELECT VALUE (jQuery)
    var searchTerm = this.$el.find('.form-control').val();
    // console.log(searchTerm);
    this.collection.search(searchTerm);
  },

  template: templateURL('src/templates/search.html')

});
