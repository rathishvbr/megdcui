import Ember from 'ember';
import layout from '../templates/components/region-infos';

export default Ember.Component.extend({
  flag: true,
  isButtonVisible: true,

  validate() {
    this.set("flag", true);
    if (Em.isBlank(this.get('compute'))) {
       this.notifications.error('Please fill the compute field');
       this.set("flag", false);
    }
    if (Em.isBlank(this.get('storage'))) {
      this.notifications.error('Please enter storage size');
      this.set("flag", false);
    }
  },

  actions: {
    validateAndAuthenticate() {

      this.validate();
      if (this.get('flag')) {
         this.set('isButtonVisible', false);
         this.get('onConfirm')();
       }
     },
     done() {
       this.validate();
       if (this.get('flag')) {
         this.get('onDone')();
       }
     }
  }
   });
