/**
 * Modules dependencies
 */
// No dependencies

/**
 * Ivr class
 * @constructor
 * @param {app} Object - The Application object instance
 * @param {string} caller - The caller phone number
 * @param {string} called - The called phone number
 * @param {string} interfaceType - The interface type
 */
function Ivr(app, caller, called, interfaceType) {
	this.app = app;
	this.caller = caller;
	this.called = called;
	this.interfaceType = interfaceType;
}

function makeRequest(app, options, property, callback) {
	return app.request(options)
	.then(function(_res) {
		if (callback) callback(null, _res[property]);
		return _res[property];
	})
	.catch(function (_err) {
		if (callback) callback(_err, null);
		throw _err;
	});
}

/**
 * Check is caller number is mobile
 * @memberof Ivr
 * @return {Promise/Callback} isMobile - The boolean isMobile within promise / callback with error
 */
Ivr.prototype.isMobile = function(callback) {
	return makeRequest(this.app, {
		auth: true,
		method: 'GET',
		path: '/phoneNumbers/isMobile',
		query: { number: this.caller }
	}, 'mobile', callback);
};

/**
 * Check is caller number is eligible to receive short message
 * @memberof Ivr
 * @return {Promise/Callback} isEligible - The boolean isEligible within promise / callback with error
 */
Ivr.prototype.isEligible = function(callback) {
	return makeRequest(this.app, {
		auth: true,
		method: 'GET',
		path: '/ivr/isEligible',
		query: { caller: this.caller, called: this.called }
	}, 'eligible', callback);
};

/**
 * This method is called when user requested an interface (answered yes to the service proposal message
 * @memberof Ivr
 * @return {Promise/Callback} success - The boolean success within promise / callback with error
 */
Ivr.prototype.serviceRequest = function(callback) {
	return makeRequest(this.app, {
		auth: true,
		method: 'POST',
		path: '/ivr/serviceRequest',
		body: { caller: this.caller, called: this.called }
	}, 'success', callback);
};

/**
 * To update call state
 * @memberof Ivr
 * @param {String} callState - The call state, can be one of : [call-start, call-end, answer-get-sms]
 * @return {Promise/Callback} success - The boolean success within promise / callback with error
 */
Ivr.prototype.log = function(callState, callback) {
	return makeRequest(this.app, {
		auth: true,
		method: 'POST',
		path: '/ivr/log',
		body: { caller: this.caller, called: this.called, type: callState }
	}, 'success', callback);
};

module.exports = Ivr;

