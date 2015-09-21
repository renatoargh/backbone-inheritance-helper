Backbone.View.prototype.parent = Backbone.Model.prototype.parent = Backbone.Collection.prototype.parent = function(attribute, options) {
  if(attribute == 'inherit') {
    this.parent('initialize', options);

    if(this.events) {
        $.extend(this.events, this.parent('events'));
        this.delegateEvents();
    }

    return;
  }

  return (_.isFunction(this.constructor.__super__[attribute])) ?
    this.constructor.__super__[attribute].apply(this, _.rest(arguments)) :
    this.constructor.__super__[attribute];
};
