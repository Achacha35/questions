import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
     saveQuestion1() {
       var params= {
         asked: this.get('asked'),
         author: this.get('author'),
       };
       this.set('addNewQuestion', false);
       this.sendAction('saveQuestion2', params);
     }
  }
});
