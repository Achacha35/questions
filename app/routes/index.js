import Ember from 'ember';

// var questions = [{
//   asked: "I have started a new ember project but the port 4200 is not working",
//   author: "Peter Achacha"
// }, {
//   asked: "How do I install bootstrap to use in my ember project?",
//   author: "James White"
// }, {
//   asked: "How do I create a route in ember projects??",
//   author: "Michelle Brown"
// }, {
//   asked: "How do I create a component in ember?",
//   author: "Tasha Banks"
// }];

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')  

  });
},
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
},

    saveAnswer(params) {
     var newAnswer = this.store.createRecord('answer', params);
     newAnswer.save();
     this.transitionTo('index');
   }
 }
});
