Easy to define factories for backbone.js models.

#Usage
    Application = {};
    Appliction.Person = Backbone.Model.extend({});

    Factory.namespace = "Application";
    Factory.define('Person', {
      name: "Vee"
    });

    var person = Factory.build("Person", { name: "Veronika" });
    person.get("name") === "Veronika" //true
