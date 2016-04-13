import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  euid: DS.attr("string"),
  created: DS.attr("date"),
  updated: DS.attr("date"),
  email: DS.attr('string')
});
