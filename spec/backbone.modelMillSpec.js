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

    describe("with a model defined", function() {
      beforeEach(function() {
        Factory.define('PersonWithNickname', {
          model: "Person",
          name: "Vee",
          nickname: "Veeka"
        });
      });
      it("build a model of the defined type", function() {
        var person = Factory.build('PersonWithNickname');
        expect(person instanceof Backbone.Model).toBeTruthy();
        expect(person.get('nickname')).toEqual("Veeka");
      });

      it("removes the model from the attributes", function() {
        var person = Factory.build('PersonWithNickname');
        expect(person.get('model')).toBeUndefined();
      });
    });
  });
});
