Easy to define factories for backbone.js models.

#Usage
    Application = {};
    Appliction.Person = Backbone.Model.extend({});

    Factory.namespace = "Application";
    Factory.define('Person', {
      name: "Vee"
    });

    var vee = Factory.build("Person");
    vee.get("name") === "Vee" //true

    var veronika = Factory.build("Person", { name: "Veronika" });
    veronika.get("name") === "Veronika"; //true

    Factory.define("PersonWithNick", {
      model: "Person",
      name: "Vee",
      nick: "Ka"
    });

    var personWithNick = Factory.build("PersonWithNick");
    person instanceOf vee; //true
    personWithNick.get("nick") === "Ka"; //true

