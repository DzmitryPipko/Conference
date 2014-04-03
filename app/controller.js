/**
 * Parent Controller (all other controllers should extend this)
 * @class PagesController
 * @classDescription This class contains functions that all other controllers extend. This way we can have before and after for all controllers in one place. Native functionality includes setting this.user, instantiating this.page, and handling passed authentication rules.
 *
 */

var locomotive = require('locomotive'), ParentController = locomotive.Controller;

//Begin Parent Controller
	ParentController.parentOf = function(AppController, requireLoggedIn, requireNotLoggedIn){
		//Fire beforeAll and afterAll
		AppController.before('*', ParentController.beforeAll);
		AppController.after('*', ParentController.afterAll);


	};

	ParentController.beforeAll = function(next){

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

