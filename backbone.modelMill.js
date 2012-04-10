Factory = {};

(function(Factory) {
  var factoryAttributes = {};

  _.extend(Factory, {
    define: function(name, attributes) {
      factoryAttributes[name] = attributes;
    },
    build: function(name, attributes) {
      var defaultAttributes = factoryAttributes[name];
      if(defaultAttributes.model) {
        var modelName = defaultAttributes.model;
        delete defaultAttributes.model;
      } else {
        var modelName = name;
      }

      var namespace = eval(this.namespace);
      var model = namespace[modelName];
      var attributes = _.extend({}, defaultAttributes, attributes)
      return new model(attributes);
    }
  });
})(Factory);
