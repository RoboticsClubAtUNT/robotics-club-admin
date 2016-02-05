import Ember from 'ember';

export default Ember.Controller.extend({

  searchQuery: '',

  filteredContent: Ember.computed('model.[]', 'searchQuery', function() {
    var filter = this.get("searchQuery");
    var rx = new RegExp(filter, 'gi');
    var guides = this.get('model');


    return guides.filter(function(guide) {
      return guide.get('title').match(rx);
    });
  })

});
