describe("backbone.modelMill", function() {
  describe("with namespace set", function() {
    beforeEach(function() {
      Application = {};
      Factory.namespace = "Application";
      Application.Person = Backbone.Model.extend({});
    });

    it("creates a backbone model from a factory definition", function() {
      Factory.define('Person', {
        name: "Vee"
      });

      var person = Factory.build('Person');

      expect(person instanceof Backbone.Model).toBeTruthy();
      expect(person.get('name')).toEqual('Vee');
    });

    it("allows for attribute overrides", function() {
      Factory.define('Person', {
        name: "Vee"
      });

      var person = Factory.build('Person', {
        name: "Veronika"
      });

      expect(person.get('name')).toEqual('Veronika');
    });
  });
});
