backbone-elements
=================

Clean way to get view's elements inspired in Spine Framework, (less than 0.7KB).

If you add an 'elements' object attribute in your view, with selector (key) and element name (value), you will get each element as your view's prototype attribute. Accessible for all the view.

```
  var FooView = Backbone.View.extend({

    elements: {
      'a#test-link'             : 'testLink',
      'input#test-input'        : '$testInput',
      'p[data-control=values]'  : '_valuesContent',
      'span[data-control=link]' : '$spanLink',
      'span[data-control=input]': 'spanInput',
      'span#input-value'        : '_spanInputValue'
    },

    initialize: function(){
      console.log(this.testLink.text(), this.$testInput.val(), this._valuesContent, '...');
      console.log('That is really clean and easy to read!');
      // Do other stuff
    }

  });

  var fooView = new FooView();
```
vs
==

```
  var FooView = Backbone.View.extend({

    initialize: function(){
      this.testLink = this.$('a#test-link');
      this.$testInput = this.$('input#test-input');
      this._valuesContent = this.$('p[data-control=values]');
      this.$spanLink = this.$('span[data-control=link]');
      this.spanInput = this.$('span[data-control=input]');
      this._spanInputValue = this.$('span#input-value');
      console.log(this.testLink.text(), this.$testInput.val(), this._valuesContent, '...');
      console.log('Mmm, not bad but no so clear to read');
      // Do other stuff
    }

  });

  var fooView = new FooView();
```
How to use
==========

```
<script src="/js/backbone.min.js"></script>
<script src="/js/backbone.elements.min.js"></script>
```

Just add the script AFTER backbone.js file and you are ready to start!

