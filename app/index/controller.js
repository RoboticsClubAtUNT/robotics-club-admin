import Ember from 'ember';

export default Ember.Controller.extend({
  username: "",
  password: "",
  auth: Ember.inject.service("user-auth"),
  actions: {
    authenticate() {
      var _username = this.get("username");
      var _password = this.get("password");
      console.log(_username);
      console.log(_password);
      this.get("auth").login(_username, _password);

      if(this.get("auth").checkAuth()) {
        this.transitionToRoute('guides');
        this.set("username", "");
        this.set("password", "");
      } else {
        alert("Bad credentials. Try Again.");
      }

    }
  }
});
