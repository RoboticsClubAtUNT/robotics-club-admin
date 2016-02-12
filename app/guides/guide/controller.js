import Ember from 'ember';

export default Ember.Controller.extend({
actions: {

  toggleDeleteModal() {
    this.toggleProperty('deleteModalIsShowing');
    console.log(this.get('deleteModalIsShowing'));
  },
  deleteGuide() {
    var self = this;
    var guide = this.get('model');
    var store = this.store;

    var url = "";
    var host = this.store.adapterFor('application').get('host');

    if (host) {
      url += host;
    }

    url += "/api/v2/guides/";
    url += guide.id;

    Ember.$.ajax({
      type: "DELETE",
      url: url
      // data: guide,
      // dataType: "json"
    }).done(function() {
      self.toggleProperty('deleteModalIsShowing');
      self.transitionToRoute("guides");
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
