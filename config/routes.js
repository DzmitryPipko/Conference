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


    //------------------------------AUTH

    this.match('/signup', { controller: 'login', action: 'signup', via: 'get' });
    this.match('/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
                 if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.redirect('/users/' + user.username);
            });
        })(req, res, next);  }, {via:'POST'});

    
    this.match('/login', { controller: 'login', action: 'login', via: 'get' });
    this.match('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
                 if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.redirect('/users/' + user.username);
            });
        })(req, res, next); }, {via:'POST'});


    
    this.match('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }), { via: 'get' });
    this.match('/auth/facebook/callback', function(req, res, next) {
        passport.authenticate('facebook', function(err, user, info) {
                 if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.redirect('/users/' + user.username);
            });
        })(req, res, next);
    });


    //---------------------------------CONNECT

    this.match('/connect/facebook', passport.authorize('facebook', { scope: 'email' }), { via: 'get' });
    this.match('/connect/facebook/callback', passport.authorize('facebook', {
				successRedirect : '/profile',
				failureRedirect : '/'
			}));


    this.match('/logout', function(req, res) {
        req.logout();
		res.redirect('/');        
    });
    


    //---------------------------------UNLINK


    this.match('/unlink/facebook', function(req, res) {
      var user  = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });    
    });

     this.match('/unlink/twitter', function(req, res) {
      var user  = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });    
    });

     this.match('/unlink/google', function(req, res) {
      var user  = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });    
    });


    this.resources('users');
};




