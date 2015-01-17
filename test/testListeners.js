$(function(){

  var TestElements = Backbone.View.extend({

    el: 'section#test-elements',

    events: {
      'keyup input#test-input': 'refreshSpanValue'
    },

    elements: {
      'a#test-link': 'testLink',
    },

    listeners: {
      'testEvent'     : 'logTestEvent',
      'testWithParams': 'logEventParams',
      'checkContest'  : 'logContext'
    },

    initialize: function(){
      console.log('LINK again:', this.testLink, 'Just check both new behaviors');
      Backbone.trigger('testEvent');
      Backbone.trigger('testWithParams', 1, 'a', 2);
      Backbone.trigger('checkContest');
    },

    logTestEvent: function(){
      console.log('Test EVENT!! OK!');
    },

    logEventParams: function(){
      console.log('Test parameters!', arguments, 'should be equal [1, "a", 2]');
    },

    logContext: function(){
      console.log('Test context', this, 'should be equal this view context!');
    }

  });

  var test = new TestElements();

});
