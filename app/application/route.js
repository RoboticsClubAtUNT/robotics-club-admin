import Ember from 'ember';

export default Ember.Route.extend({

  auth: Ember.inject.service("user-auth"),

  actions: {
    didTransition(transition) {
      if(!this.get("auth").checkAuth()) {
        this.transitionTo("index");
      }
    }
  }

});
