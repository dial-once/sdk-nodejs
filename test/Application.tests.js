/**
 * Modules dependencies
 */
const assert = require('assert');
const Dialonce = require('../index');

const fixtures = {
  ACCESS_TOKEN: 'AsvAUbSo37MgnDl4HKBYz66LWuOow3o3',
  API_KEY: 'qpvao53b1x10z7u3906wvgzmvexuxwxj',
  API_SECRET: '56g5jvhlciv9e0l4izccjqkf54okh21jbn4d4yj7'
};

describe('Application:', () => {
  describe('Application - using apiKey & apiSecret:', () => {
    before(() => {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      assert(this.app.apiKey === fixtures.API_KEY);
      assert(this.app.apiSecret === fixtures.API_SECRET);
    });

    it('should return api status', (done) => {
      this.app.request({ auth: false })
        .then((_res) => {
          assert(typeof _res === 'object');
          assert(_res.name === 'gateway-http');
        })
        .then(done);
    });

    it('should return error', (done) => {
      this.app.request({ auth: true, path: '/myCustomPath' })
        .catch((_err) => {
          assert(_err.status === 404);
          assert(_err.message === 'Not Found');
        })
        .then(done);
    });

    it('should return access token', (done) => {
      this.app.authenticate()
        .then((_res) => {
          assert(typeof _res === 'string');
        })
        .then(done);
    });
  });

  describe('Application - using accessToken:', () => {
    before(() => {
      this.app = null;
      this.app = new Dialonce.Application(fixtures.ACCESS_TOKEN);
      assert(this.app.apiKey === undefined);
      assert(this.app.apiSecret === undefined);
    });

    it('should return api status', (done) => {
      this.app.request({ auth: false })
        .then((_res) => {
          assert(typeof _res === 'object');
          assert(_res.name === 'gateway-http');
        })
        .then(done);
    });

    it('should return error', (done) => {
      this.app.request({ auth: true, path: '/myCustomPath' })
        .catch((_err) => {
          assert(_err.status === 404);
          assert(_err.message === 'Not Found');
        })
        .then(done);
    });

    it('should return access token', (done) => {
      this.app.authenticate()
        .then((_res) => {
          assert(typeof _res === 'string');
        })
        .then(done);
    });
  });

  describe('Application - authenticattion error:', () => {
    before(() => {
      this.app = null;
      this.app = new Dialonce.Application('XXX', 'XXX');
      assert(this.app.apiKey === 'XXX');
      assert(this.app.apiSecret === 'XXX');
    });

    it('should return api status', (done) => {
      this.app.request({ auth: false })
        .then((_res) => {
          assert(typeof _res === 'object');
          assert(_res.name === 'gateway-http');
        })
        .then(done);
    });

    it('should return error', (done) => {
      this.app.request({ auth: true, path: '/myCustomPath' })
        .catch((_err) => {
          assert(_err.status === 401);
          assert(_err.message === 'Unauthorized');
        })
        .then(done);
    });

    it('should return error', (done) => {
      this.app.authenticate()
        .catch((_err) => {
          assert(_err.status === 401);
          assert(_err.message === 'Unauthorized');
        })
        .then(done);
    });
  });
});
