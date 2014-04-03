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
   		successRedirect : '/users/:id', // redirect to the secure profile section
   		failureRedirect : '/signup' // redirect back to the signup page if there is an error
   	}),{via:'POST'});

   this.match('/login', { controller: 'login', action: 'login', via: 'get' });
   this.match('/login', passport.authenticate('local-login', {
   		successRedirect : '/users/:id', // redirect to the secure profile section
   		failureRedirect : '/login' // redirect back to the signup page if there is an error
   	}),{via:'POST'});


   this.match('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }), {via: 'get' });

//   this.match('/auth/facebook/callback', passport.authenticate('facebook', {
//   		successRedirect : '/signup', // redirect to the secure profile section
//   		failureRedirect : '/' // redirect back to the signup page if there is an error
//   	}),{via:'get'});

  this.match('/auth/facebook/callback', passport.authenticate('facebook', {failureRedirect : '/'}), function(req, res) {
    var user = req.user;

    res.redirect('/users/' + user.firstName);
  });


   	this.resources('users');
}