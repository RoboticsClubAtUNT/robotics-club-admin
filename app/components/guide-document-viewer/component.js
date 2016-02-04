import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this.$('a').attr('target', '_blank');
  }
});
