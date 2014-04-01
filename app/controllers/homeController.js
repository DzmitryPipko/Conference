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


var homeController = new Controller();

homeController.main = function() {
  this.title = 'Locomotive';
  this.render();
}


ParentController.parentOf(homeController,ActionsRequiringLogin, ActionsRequiringNotLoggedIn);

module.exports = homeController;
