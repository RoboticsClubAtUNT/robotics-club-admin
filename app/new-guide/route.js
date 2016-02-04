import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToSpecifiedRoute: function() {
      this.transitionTo('guides');
    },

    submitGuide: function() {

      // this.store.push({
      //   data: {
      //     id: "123",
      //     type: 'guide',
      //     attributes: {
      //       title: this.get('title'),
      //       body: this.get('body'),
      //       created: Date.now(),
      //       updated: Date.now()
      //     }
      //   }
      // });

      // var guide = {
      //   data: {
      //     id: "123",
      //     type: 'guide',
      //     attributes: {
      //       title: this.get('title'),
      //       body: this.get('body'),
      //       created: Date.now(),
      //       updated: Date.now()
      //     }
      //   }
      // };
      //
      // var self = this;
      //
      // var url = this.store.adapterFor('application').get('host') + "/guides";
      //
      //
      //
      // var guide = this.store.createRecord('guide', {
      //   title: this.get('title'),
      //   body: this.get('body'),
      //   created: Date.now(),
      //   updated: Date.now()
      // });
      //
      // var self = this;
      //
      // guide.save().then(function(guide) {
      //   console.log(guide);
      //   self.transitionTo('guides');
      // });


    }
  }
});
