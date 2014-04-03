
var express = require('express'),
	poweredBy = require('connect-powered-by'),
	i18n = require('i18n-2'),
    passport = require('passport'),
	COOKIE_SECRET = 'CONAR_Cookie9d97kf5LlxJ742s',
	SESSION_SECRET = 'CONAR_Session_7ksd9JK!flx.9Z-9s';

module.exports = function() {
    // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
    // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
    // middleware available as separate modules.
    if ('development' == this.env) {
        this.use(express.logger());
    }

    this.use(poweredBy('Locomotive'));
    this.use(express.favicon());
    this.use(express.static(__dirname + '/../../public'));
    this.use(express.bodyParser());
    this.use(express.cookieParser(COOKIE_SECRET));
    this.use(express.session({ secret: SESSION_SECRET }));
    this.use(passport.initialize());
    this.use(passport.session());
    this.use(express.methodOverride());

    //===i18n Localization Initilizers===============================================================
    i18n.expressBind(this, {
        locales: ['de', 'en'],
        //defaultLocale doesn't work. Default locale is the first locale from locales.
        //You can change it in i18n.js line 42
        //defaultLocale: 'de',
        cookieName: 'locale',
        directory: __dirname + "/../../app/locales"
    });
    this.use(function(req, res, next) {
        req.i18n.setLocaleFromCookie();
        next();
    });
    this.use(function(req, res, next) {
        res.locals.__ = res.__ = function(msg) {
            return req.i18n.__(msg);
        };
        next();
    });
    //===Localization Initilizers===============================================================

    this.use(this.router);
    this.use(express.errorHandler());
};
