var locomotive = require('locomotive')
  , Controller = locomotive.Controller,
  ParentController = require('./../controller.js');



  // allow, deny actions
  var ActionsRequiringLogin = {
  };
  var ActionsRequiringNotLoggedIn = {
  	"showDeviceDetails": true,
  	"showDevices": true
  };


var loginController = new Controller();

loginController.login = function() {

    this.render();
};

loginController.signup = function() {

    this.render('singup');

};

ParentController.parentOf(loginController,ActionsRequiringLogin, ActionsRequiringNotLoggedIn);

module.exports = loginController;
