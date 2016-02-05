import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('guide', params.id);
  },

  actions: {

    error() {
      this.transitionTo('guides');
    },

    deleteGuide() {
      var controller = this.controller;
      var guide = controller.get('model');
      var store = this.store;

      Ember.$.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/api/v2/guides/' + guide.id,
        // data: guide,
        // dataType: "json"
      }).done(function() {

        controller.transitionToRoute("guides");
        store.unloadRecord(guide);
        console.log('Deleted!');
      });

      // this.store.findRecord('guide', guide.id).then(function(guide) {
      //   // console.log(guide);
      //   controller.transitionToRoute("guides");
      //   guide.deleteRecord();
      //
      //   Ember.$.ajax({
      //     type: "DELETE",
      //     url: 'http://localhost:8080/api/v2/guides/' + guide.id,
      //     // data: guide,
      //     // dataType: "json"
      //   }).done(function() {
      //     console.log('Deleted!');
      //   });
      //
      // });
    }
  }
});
