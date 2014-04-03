var locomotive = require('locomotive')
  , Controller = locomotive.Controller,
  ParentController = require('./../controller.js'),
	photoModel = require('./../models/photo.js');



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
	
	var ddd = this.__("Hi");
//	var photo = photoModel({ name: "TestPhoto", url: "TestUrl" });
//    photo.save(function(err, testPhoto){
//	console.log("save------<");
//	if(err)
//		console.log(err);
//	if(testPhoto)
//		console.log(testPhoto);
//    });


  this.render();
}

ParentController.parentOf(homeController,ActionsRequiringLogin, ActionsRequiringNotLoggedIn);

module.exports = homeController;
