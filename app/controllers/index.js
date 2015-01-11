import Ember from 'ember';
import naturalSort from '../utils/naturalSort';

export default Ember.Controller.extend({
  init: function() {
    var sorted = ['10', 9, 2, '1', '4'].sort(naturalSort);
    console.log('Sorted:', sorted);
  }
});
