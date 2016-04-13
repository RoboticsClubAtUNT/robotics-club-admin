import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: "http://10.120.33.225:8080",
  namespace: "api/v2"
});
