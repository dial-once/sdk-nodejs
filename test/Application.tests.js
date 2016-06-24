/**
 * Modules dependencies
 */
var assert = require('assert');
var Dialonce = require('../index');

var fixtures = {
  API_KEY: 'qpvao53b1x10z7u3906wvgzmvexuxwxj',
  API_SECRET: '56g5jvhlciv9e0l4izccjqkf54okh21jbn4d4yj7'
};

describe('Application:', function() {
  before(function() {
    this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
    assert(this.app.apiKey === fixtures.API_KEY);
    assert(this.app.apiSecret === fixtures.API_SECRET);
  });

  it('should return api status', function(done) {
    this.app.request({ auth: false })
    .then(function(_res) {
      assert(typeof _res === 'object');
      assert(_res.name === 'gateway-http');
    })
    .then(done);
  });

  it('should return error', function(done) {
    this.app.request({ auth: true, path: '/myCustomPath' })
    .catch(function(_err) {
      assert(_err.status === 404);
      assert(_err.message === 'Not Found');
    })
    .then(done);
  });

  it('should return access token', function(done) {
    this.app.authenticate()
    .then(function(_res) {
      assert(typeof _res === 'string');
    })
    .then(done);
  });
});
