import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('guides', function() {
    this.route('guide', { path: '/:id' });
  });
  this.route('new-guide', { path: '/guides/new' });
  this.route('edit-guide', { path: '/guides/edit/:id' });
});

export default Router;
