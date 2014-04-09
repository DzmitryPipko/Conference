var locomotive = require('locomotive'),
    Controller = locomotive.Controller,
    usersController = new Controller(),
    ParentController = require('./../controller.js');


  // allow, deny actions
  var ActionsRequiringLogin = {
  };
  var ActionsRequiringNotLoggedIn = {
  	"showDeviceDetails": true,
  	"showDevices": true
  };

usersController.index = function() {

    var self = this;
}

 // create empty page
usersController.new = function() {

    var self = this;
}

//save data
usersController.create = function() {

}

usersController.show = function() {
    var  self = this;
    this.user = this.__req.user;
    self.render();
}

usersController.edit = function() {

}

usersController.update = function() {

}

usersController.destroy = function() {

}


ParentController.parentOf(usersController,ActionsRequiringLogin, ActionsRequiringNotLoggedIn);
module.exports = usersController;