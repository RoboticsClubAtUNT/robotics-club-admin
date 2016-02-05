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

      Ember.$.ajax({
        type: "PATCH",
        url: 'http://localhost:8080/api/v2/guides/' + this.get('model').id,
        data: guide,
        dataType: "json"
      }).done(function() {
        self.transitionToRoute("guides");
      });
    }
  }
});
