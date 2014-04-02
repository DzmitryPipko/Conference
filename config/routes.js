// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.

var passport = require('passport');

module.exports = function routes() {
  this.root('home#main');

   this.match('/signup', { controller: 'login', action: 'signup', via: 'get' });
  this.match('/signup', passport.authenticate('local-signup', {
  		successRedirect : '/profile', // redirect to the secure profile section
  		failureRedirect : '/signup' // redirect back to the signup page if there is an error
  	}),{via:'POST'});
}
