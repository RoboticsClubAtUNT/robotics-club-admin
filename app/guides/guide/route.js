import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guide', params.id);
  },

  actions: {


    error() {
      this.transitionTo('guides');
    }


  }
});
