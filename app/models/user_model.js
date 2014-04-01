

var UserModel = function UserModelConstructor(username, password, accountID) {
	this.username = username;
	this.password = password;
	this.accountID = accountID;
	this.storedUser = null;
	this.firstName = null;
	this.lastName = null;
};

/**
 * Validation rule for username:
 * 	- dashes
 *  - all letters (upper and lower case), underscores, and numbers ( \w -> word character)
 *  - dots
 *  - dollar signs
 *  - @ signs
 *
 *  -length: between 1 and 50
 */
UserModel.prototype.checkUsername = function() {
	return (typeof(this.username) === 'string') && this.username.match(/^[-\w\.\$@]{1,50}$/);
};


/**
 * Validation rule for accountID:
 *  - all letters (upper and lower case), underscores, and numbers ( \w -> word character)
 *  -length: 8
 */
UserModel.prototype.checkAccountID = function() {
	return (typeof(this.password) === 'string') && this.password.match(/^[\w]{8}$/);
};


/**
 * Validation rule for password:
 * 	- dashes
 *  - all letters (upper and lower case), underscores, and numbers ( \w -> word character)
 *  - dots
 *  - dollar signs
 *  - @ signs
 *  - asterixes
 *  - spaces
 *
 *  -length: between 6 and 50
 */
UserModel.prototype.checkPassword = function() {
	return (typeof(this.password) === 'string') && this.password.match(/^[-\w\.\$@\* ]{6,50}$/);
};


/**
 * Fire all validation rules for this object
 *
 */
UserModel.prototype.validate = function() {
	this.checkUsername();
	this.checkPassword();
	this.checkAccountID();
};



module.exports = UserModel;