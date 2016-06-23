/**
 * Modules dependencies
 */
var request = require('request');

var pools = [];
var isAuthenticating = false;

function Application() {
	if (arguments.length === 1) {
		this.accessToken = arguments[0];
		return;
	}

	this.host = 'http://api.dialonce.io' // https://api.dial-once.com/'
	this.apiKey = arguments[0];
	this.apiSecret = arguments[1];
	this.accessToken = '';

	this.authenticate();
}

Application.prototype.authenticate = function(options) {
	var _this = this;

	return new Promise(function(_resolve, _reject) {
		if (isAuthenticating)  {
			pools.push(_resolve);
		} else {
			isAuthenticating = true
			request({
				url: _this.host + '/oauth/token',
				method: 'POST',
				json: { grant_type: 'client_credentials', client_id: _this.apiKey, client_secret: _this.apiSecret }
			}, function(_err, _res, _body) {
		    if (_err || _res.statusCode >= 400) return _reject(_err || _body);

		    _this.accessToken = _body.access_token;
		    console.log(_this.accessToken);

		    while (pools.length) {
		    	pools.shift()(_this.accessToken);
		    }

		  	return _resolve(_this.accessToken);
			});
		}
	});
};

Application.prototype.request = function(options) {
	var _this = this;

	return new Promise(function(_resolve, _reject) {
		if (!_this.accessToken) {
			_this.authenticate()
			.then(function (token) {
				_this.request(options)
				.then(_resolve);
			});
		} else {
			var queryOptions = {
		    url: _this.host + (options.path || ''),
		    method: options.method || 'GET',
		    headers: { 'Authorization': 'Bearer ' + _this.accessToken },
		    qs: options.query || {},
		    json: options.body || {}
			};

			request(queryOptions, function(_err, _res, _body) {
		    if (_err || _res.statusCode >= 400) return _reject(_err || _body);
		  	return _resolve(_body);
			});
		}
	});
};

module.exports = Application;

