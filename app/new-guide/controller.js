import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.computed('body', 'title', function() {
    return {
      title: this.get('title'),
      body: this.get('body'),
      updated: Date.now(),
      created: Date.now()
    };
  }),

  actions: {
    submitGuide() {

      // var store = this.store;
      //
      // var guide = store.createRecord('guide', {
      //   title: this.get('title'),
      //   body: this.get('body')
      // });
      //
      // var self = this;
      //
      // guide.save().then(function() {
      //   self.set('title', "");
      //   self.set('body', "");
      //   self.transitionToRoute('guides');
      // });

      var url = "";
      var host = this.store.adapterFor('application').get('host');

      if (host) {
        url += host;
      }

      url += "/api/v2/guides/";


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
        url: url,
        data: guide,
        dataType: "json"
      }).done(function() {
        self.transitionToRoute('guides');
        self.set("title", "");
        self.set("body", "");
      });

    }
  }
});
