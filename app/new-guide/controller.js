import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed('body', 'title', function() {
    return {
      title: this.get('title'),
      body: this.get('body'),
      updated: Date.now(),
      created: Date.now()
    }
  })
});
