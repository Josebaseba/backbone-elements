/**/
/* backbone.elements.js
/* A clean way to set view's elements
/* Author: Joseba Legarreta - @josebaseba
/* License MIT - 2014
/**/

(function(){

  /* Backbone is required, if Backbone loads after this .js this file will be overwritten */
  if(typeof Backbone === 'undefined') return null;

  /* Save Backbone.View.prototype and extend method to merge it before overwritting the default Backbone.View */
  var viewPrototype = Backbone.View.prototype;
  var extend = Backbone.View.extend;

  /* Overwrite Backbone.View method just adding a call to setElements function */
  Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    /* Call to this function on every new view instance before calling initialize method */
    this.setElements();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  /* Default view's options Backbone's viewOptions + 'elements' option added now */
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events', 'elements'];

  /* Add setElements method to View prototype */
  _.extend(Backbone.View.prototype, viewPrototype, {

    /**/
    /* setElements - function
    /* set elements in the view context, to access with this.exampleElement
    /**/
    setElements: function(){
      if(!this.elements || !_.isObject(this.elements)) return this;
      _.each(this.elements, function(value, key){
        this[value] = this.$el.find(key);
      }, this);
    }

  });

  /* Helper function to correctly set up the prototype chain, for subclasses */
  Backbone.View.extend = extend;

})();