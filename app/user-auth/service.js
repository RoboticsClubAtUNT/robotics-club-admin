import Ember from 'ember';

export default Ember.Service.extend({

  credentials: {
    username: "admin",
    password: "untrobotsareawesome"
  },

  init() {
    this.set("user", "");
    this.set("pass", "");
  },

  login(user, pass) {
    this.set("user", user);
    this.set("pass", pass);
  },

  checkAuth() {
    var _user = this.get('user');
    var _pass = this.get("pass");
    var _admin = this.get("credentials");

    // console.log("_user = %s", _user);
    // console.log("_pass = %s", _pass);
    // console.log("_admin = %s", _admin);

    if (_user == _admin.username && _pass == _admin.password) {
      return true;
    } else {
      return false;
    }
  }


});
