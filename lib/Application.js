/**
 * Modules dependencies
 */
const request = require('request');

const pools = [];
let isAuthenticating = false;

/**
 * Application class
 * @constructor
 * @param {string} accessToken - The access token
 * OR
 * @param {string} apiKey - The api key
 * @param {string} apiSecret - The api secret
 */
function Application() {
  this.host = 'http://api.dialonce.io';

  if (arguments.length === 1) {
    [this.accessToken] = arguments;
    return;
  }

  [this.apiKey, this.apiSecret] = arguments;

  this.authenticate()
    .catch((_err) => {
      while (pools.length) {
        pools.shift().reject(_err);
      }
    });
}

/**
 * Create access token
 * @memberof Application
 * @return {Promise} accessToken - The access_token within promise
 */
Application.prototype.authenticate = () => {
  const _this = this;
  return new Promise((_resolve, _reject) => { // eslint-disable-line
    if (isAuthenticating && !_this.accessToken) {
      pools.push({
        resolve: _resolve,
        reject: _reject
      });
    } else if (_this.accessToken) {
      return _resolve(_this.accessToken);
    } else {
      isAuthenticating = true;

      request({
        url: `${_this.host}/oauth/token`,
        method: 'POST',
        json: {
          grant_type: 'client_credentials',
          client_id: _this.apiKey,
          client_secret: _this.apiSecret
        }
      }, (_err, _res, _body) => {
        isAuthenticating = false;
        if (_err || _res.statusCode >= 400) return _reject(_err || _body);

        _this.accessToken = _body.access_token;

        while (pools.length) {
          pools.shift().resolve(_this.accessToken);
        }

        return _resolve(_this.accessToken);
      });
    }
  });
};

/**
 * Make a request to API endpoint
 * @memberof Application
 * @param {Object} options - The request options
 * @param.method {String} method - The request method, eg: GET
 * @param.path {String} path - The request path, eg: /ivr/isMobile
 * @param.body {Object} body - The request body params
 * @param.query {Object} query - The request query params
 * @return {Promise} body - The response body within promise
 */
Application.prototype.request = (options) => {
  const _this = this;

  return new Promise((_resolve, _reject) => {
    if (options.auth && !_this.accessToken) {
      _this.authenticate()
        .then(() => _this.request(options))
        .then(_resolve)
        .catch(_reject);
    } else {
      const queryOptions = {
        url: _this.host + (options.path || ''),
        method: options.method || 'GET',
        headers: {
          Authorization: `Bearer ${_this.accessToken}`
        },
        qs: options.query || {},
        json: options.body || {}
      };

      request(queryOptions, (_err, _res, _body) => {
        if (_err || _res.statusCode >= 400) return _reject(_err || _body);
        return _resolve(_body);
      });
    }
  });
};

module.exports = Application;
