import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitGuide() {

      // this.sendAction("submitGuide");

      // var url = this.store.adapterFor('application').get('host') + "/guides";

      var self = this;

      var guide = {
        data: {
          type: 'guide',
          attributes: {
            title: self.get('title'),
            body: self.get('body'),
            created: Date.now(),
            updated: Date.now()
          }
        }
      };

      Ember.$.ajax({
        type: "POST",
        url: 'http://localhost:8080/api/v2/guides',
        data: guide,
        dataType: "json"
      }).done(function() {
        self.sendAction("goToSpecifiedRoute");
        self.set("title", "");
        self.set("body", "");
      });

    }
  }
});
