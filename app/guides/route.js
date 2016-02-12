import Ember from 'ember';

export default Ember.Route.extend({

  auth: Ember.inject.service("user-auth"),

  model() {
    return this.store.findAll('guide');
  },

  actions: {
    // willTransition(transition) {
    //   if(!this.get("auth").checkAuth()) {
    //     alert("You need to sign in first.");
    //     this.transitionTo("index");
    //   }
    // },
    didTransition(transition) {
      if(!this.get("auth").checkAuth()) {
        alert("You need to sign in first.");
        this.transitionTo("index");
      }
    }
  }
});
