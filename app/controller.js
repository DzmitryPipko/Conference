/**
 * Parent Controller (all other controllers should extend this)
 * @class PagesController
 * @classDescription This class contains functions that all other controllers extend. This way we can have before and after for all controllers in one place. Native functionality includes setting this.user, instantiating this.page, and handling passed authentication rules.
 *
 */

var locomotive = require('locomotive')
,	ParentController = locomotive.Controller

//Begin Parent Controller
	ParentController.parentOf = function(AppController, requireLoggedIn, requireNotLoggedIn){
		//Fire beforeAll and afterAll
		AppController.before('*', ParentController.beforeAll);
		AppController.after('*', ParentController.afterAll);

//		if(typeof requireLoggedIn !== 'undefined'){
//		AppController.before('*', function(next){
//				if(requireLoggedIn[this.__req._locomotive.action] && !this.loggedIn){
//					this.redirect("/unauthorized");
//				}
//				next();
//			});
//		}
//		if(typeof requireNotLoggedIn !== 'undefined'){
//			AppController.before('*', function(next){
//				if(requireNotLoggedIn[this.__req._locomotive.action] && this.loggedIn){
//					this.redirect("/publicOnly");
//				}
//				next();
//			});
//		}
	};

	ParentController.beforeAll = function(next){

//        var apiUrl = this.app.hippoUrl;
//		//Before all actions in all controllers set this.user to the autheticatedUser.
//		this.user = this.__req.session.authenticatedUser;
//		this.loggedIn = typeof this.user === 'object' && this.user.username;
//
//		//Attempt login from cookie if not logged in and a remember me cookie is set
//		if(!this.user && this.__req._locomotive.action !== 'processRememberMe' && (typeof this.__req.cookies.rememberMe !== 'undefined')){
//			this.redirect("/processRememberMe");
//			return;
//		}
//
//		//Make the page information available for the view
//		pageName = (this.__req._locomotive.controller.toLowerCase()).replace("controller","") + '-' + this.__req._locomotive.action;
//		this.page = {
//				name : pageName,
//				title : pageName + '_title',
//				description : pageName + '_description'
//		};
//		this.selectedPage = {};
//		this.selectedPage[pageName] = true;
//		this.__req.session.previousPageName = pageName;
//
//		var protocol = this.__req.socket.encrypted ? 'https' : 'http';
//		if(apiUrl.charAt(0) === '/'){
//			apiUrl = protocol + '://' + this.__req.headers['host'] + apiUrl;
//		}
//		this.hippoApiUrl = apiUrl;
//
//		//Expose current language
//		this.language = i18n.getLocale(this.__req);
//		this.selectedLanguage = {};
//		this.selectedLanguage[this.language] = true;
//
		next();
	};

	ParentController.afterAll = function(next){
		next();
	};

    /**
     * Prepare no cache headers
     */
    ParentController.__addNoCacheHeaders = function() {
        // Disable caching for content files
//        this.__res.header("Cache-Control", "no-cache, no-store, must-revalidate");
//        this.__res.header("Pragma", "no-cache");
//        this.__res.header("Expires", 0);
    };

//End Controller
module.exports = ParentController;

