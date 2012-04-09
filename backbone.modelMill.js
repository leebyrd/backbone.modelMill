Factory = {};

(function(Factory) {
  var factoryAttributes = {};

  _.extend(Factory, {
    define: function(name, attributes) {
      factoryAttributes[name] = attributes;
    },
    build: function(name, attributes) {
      var namespace = eval(this.namespace);
      var model = namespace[name];
      var defaultAttributes = factoryAttributes[name];
      var attributes = _.extend({}, defaultAttributes, attributes)
      return new model(attributes);
    }
  });
})(Factory);
