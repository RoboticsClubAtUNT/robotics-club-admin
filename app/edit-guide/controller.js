import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateGuide() {

      var self = this;

      var model = this.get('model');

      var guide = {
        data: {
          type: 'guide',
          id: this.get('model').id,
          attributes: {
            title: model.get('title'),
            body: model.get('body'),
            updated: Date.now()
          }
        }
      };

      var url = "";
      var host = this.store.adapterFor('application').get('host');

      if (host) {
        url += host;
      }

      url += "/api/v2/guides/";
      url += this.get('model').id;

      Ember.$.ajax({
        type: "PATCH",
        url: url,
        data: guide,
        dataType: "json"
      }).done(function() {
        self.transitionToRoute("guides");
      });
    }
  }
});
