import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('exe1');
  this.route('exe2');
  this.route('exe3');
  this.route('exe4');
  this.route('exe5');
});

export default Router;
