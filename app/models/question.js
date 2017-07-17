import DS from 'ember-data';

export default DS.Model.extend({
  asked: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', { async: true })


});
