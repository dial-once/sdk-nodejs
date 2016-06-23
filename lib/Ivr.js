/**
 * Modules dependencies
 */

function Ivr(app, caller, called, interfaceType) {
	this.app = app;
	this.caller = caller;
	this.called = called;
	this.interfaceType = interfaceType;
}

Ivr.prototype.isMobile = function(callback) {
	return this.app.request({ method: 'GET', path: '/phoneNumbers/isMobile', query: { number: this.caller } })
	.then(function(_res) {
		if (callback) callback(null, _res.mobile);
		return _res.mobile;
	})
	.catch(function (_err) {
		if (callback) callback(_err, null);
		return _err;
	});
};

Ivr.prototype.isEligible = function(callback) {
	return this.app.request({ method: 'GET', path: '/ivr/isEligible', query: { caller: this.caller, called: this.called } })
	.then(function(_res) {
		if (callback) callback(null, _res.eligible);
		return _res.eligible;
	})
	.catch(function (_err) {
		if (callback) callback(_err, null);
		return _err;
	});
};

Ivr.prototype.serviceRequest = function(callback) {
	return this.app.request({ method: 'POST', path: '/ivr/serviceRequest', body: { caller: this.caller, called: this.called } })
	.then(function(_res) {
		if (callback) callback(null, _res.success);
		return _res.success;
	})
	.catch(function (_err) {
		if (callback) callback(_err, null);
		return _err;
	});
};

Ivr.prototype.log = function(callState, callback) {
	return this.app.request({ method: 'POST', path: '/ivr/log', body: { caller: this.caller, called: this.called } })
	.then(function(_res) {
		if (callback) callback(null, _res.success);
		return _res.success;
	})
	.catch(function (_err) {
		if (callback) callback(_err, null);
		return _err;
	});
};

module.exports = Ivr;

