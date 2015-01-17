/**/
/* backbone.elements.js
/* A clean way to set view's elements
/* Author: Joseba Legarreta - @josebaseba
/* License MIT - 2014
/**/

(function(){

  // Backbone is required before this file
  if(typeof Backbone === 'undefined') return null;

  // Save Backbone.View.prototype and extend method to merge it
  // before overwritting the default Backbone.View
  var viewPrototype = Backbone.View.prototype;
  var extend = Backbone.View.extend;

  // Overwrite Backbone.View method just adding a call to setElements function
  Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    // Call setElements and setListeners on every new view instance
    this.setElements();
    this.setListeners();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Default view's options Backbone's viewOptions + 'elements' option added now
  var viewOptions = ['model', 'collection', 'el', 'id',
                     'attributes', 'className', 'tagName',
                     'events', 'elements', 'listeners'];

  // Cached regex to split keys for delegate
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // Add setElements method to View prototype
  _.extend(Backbone.View.prototype, viewPrototype, {

    // set elements in the view context
    setElements: function(){
      if(!this.elements || !_.isObject(this.elements)) return this;
      _.each(this.elements, function(value, key){
        this[value] = this.$el.find(key);
      }, this);
    },

    // set Backbone listeners to the view
    setListeners: function(){
      if(!this.listeners || !_.isObject(this.listeners)) return this;
      _.each(this.listeners, function(value, key){
        this.listenTo(Backbone, key, this[value]);
      }, this);
    }

  });

  // Helper function to correctly set up the prototype chain, for subclasses
  Backbone.View.extend = extend;

})();
