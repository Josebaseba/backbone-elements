$(function(){

  var TestElements = Backbone.View.extend({

    el: 'section#test-elements',

    events: {
      'keyup input#test-input': 'refreshSpanValue'
    },

    /* ELEMENTS */
    /* Key is the selector of the element */
    /* Value will become the name of the attribute, it can any valid variable name */
    /* If elements doesn't exist or isn't an object nothing happens */
    elements: {
      'a#test-link'             : 'testLink',
      'input#test-input'        : '$testInput',
      'p.values-content'        : '_valuesContent',
      'span[data-control=link]' : '$spanLink',
      'span[data-control=input]': 'spanInput',
      'span#input-value'        : '_spanInputValue'
    },

    initialize: function(){
      console.log('LINK:', this.testLink);
      console.log('INPUT:', this.$testInput);
      console.log('valuesContent:', this._valuesContent);
      console.log('spanLink:', this.$spanLink);
      console.log('spanInput:', this.spanInput);
      this.printContent();
    },

    printContent: function(){
      this.$spanLink.text(this.testLink.text());
      this.spanInput.text(this.$testInput.attr('placeholder'));
      this._valuesContent.show();
    },

    refreshSpanValue: function(){
      this._spanInputValue.text(this.$testInput.val());
    }

  });

  var test = new TestElements();

});