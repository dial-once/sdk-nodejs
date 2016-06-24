/**
 * Modules dependencies
 */
var assert = require('assert');
var Dialonce = require('../index');

var fixtures = {
  API_KEY: 'qpvao53b1x10z7u3906wvgzmvexuxwxj',
  API_SECRET: '56g5jvhlciv9e0l4izccjqkf54okh21jbn4d4yj7',
  CALLER: '+33600000000',
  CALLED: '+33100000000'
};

describe('Ivr:', function() {
  describe('isMobile - promise:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should check if caller number is mobile and return \'true\' using: +33600000000', function(done) {
      this.ivr.isMobile()
      .then(function(_res) {
        assert(typeof _res === 'boolean');
        assert(_res === true);
      })
      .then(done);
    });

    it('should check if caller number is mobile and return \'false\' using: +33100000000', function(done) {
      this.ivr.caller = '+33100000000';
      this.ivr.isMobile()
      .then(function(_res) {
        assert(typeof _res === 'boolean');
        assert(_res === false);
      })
      .then(done);
    });

    it('should check if caller number is mobile and return \'error\' using: +336XXXXXXXX', function(done) {
      this.ivr.caller = '+336XXXXXXXX';
      this.ivr.isMobile()
      .catch(function(_err) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_err.status === 400);
      })
      .then(done);
    });
  });

  describe('isMobile - callback:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should check if caller number is mobile and return \'true\' using: +33600000000', function(done) {
      this.ivr.isMobile(function(_err, _res) {
        assert(_err === null);
        assert(typeof _res === 'boolean');
        assert(_res === true);
        done();
      });
    });

    it('should check if caller number is mobile and return \'false\' using: +33100000000', function(done) {
      this.ivr.caller = '+33100000000';
      this.ivr.isMobile(function(_err, _res) {
        assert(_err === null);
        assert(typeof _res === 'boolean');
        assert(_res === false);
        done();
      });
    });

    it('should check if caller number is mobile and return \'error\' using: +336XXXXXXXX', function(done) {
      this.ivr.caller = '+336XXXXXXXX';
      this.ivr.isMobile(function(_err, _res) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_res === null);
       done();
      });
    });
  });

  describe('isEligible - promise:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should check if caller number is eligible and return \'true\' using: +33600000000', function(done) {
      this.ivr.isEligible()
      .then(function(_res) {
        assert(typeof _res === 'boolean');
        assert(_res === true);
      })
      .then(done);
    });

    it('should check if caller number is eligible and return \'false\' using: +33100000000', function(done) {
      this.ivr.caller = '+33100000000';
      this.ivr.isEligible()
      .then(function(_res) {
        assert(typeof _res === 'boolean');
        assert(_res === false);
      })
      .then(done);
    });

    it('should check if caller number is eligible and return \'error\' using: +336XXXXXXXX', function(done) {
      this.ivr.caller = '+336XXXXXXXX';
      this.ivr.isEligible()
      .catch(function(_err) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_err.status === 400);
      })
      .then(done);
    });
  });

  describe('isEligible - callback:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should check if caller number is eligible and return \'true\' using: +33600000000', function(done) {
      this.ivr.isEligible(function(_err, _res) {
        assert(_err === null);
        assert(typeof _res === 'boolean');
        assert(_res === true);
        done();
      });
    });

    it('should check if caller number is eligible and return \'false\' using: +33100000000', function(done) {
      this.ivr.caller = '+33100000000';
      this.ivr.isEligible(function(_err, _res) {
        assert(_err === null);
        assert(typeof _res === 'boolean');
        assert(_res === false);
        done();
      });
    });

    it('should check if caller number is eligible and return \'error\' using: +336XXXXXXXX', function(done) {
      this.ivr.caller = '+336XXXXXXXX';
      this.ivr.isEligible(function(_err, _res) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_res === null);
       done();
      });
    });
  });

  describe('serviceRequest - promise:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should request the service for short message and return \'true\' using: +33600000000', function(done) {
      this.ivr.serviceRequest()
      .then(function(_res) {
        assert(typeof _res === 'boolean');
        assert(_res === true);
      })
      .then(done);
    });

    it('should request the service for short message and return \'error\' using: +336XXXXXXXX', function(done) {
      this.ivr.caller = '+336XXXXXXXX';
      this.ivr.serviceRequest()
      .catch(function(_err) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_err.status === 400);
      })
      .then(done);
    });
  });

  describe('serviceRequest - callback:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should request the service for short message and return \'true\' using: +33600000000', function(done) {
      this.ivr.serviceRequest(function(_err, _res) {
        assert(_err === null);
        assert(typeof _res === 'boolean');
        assert(_res === true);
        done();
      });
    });

    it('should request the service for short message and return \'error\' using: +336XXXXXXXX', function(done) {
      this.ivr.caller = '+336XXXXXXXX';
      this.ivr.serviceRequest(function(_err, _res) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_res === null);
       done();
      });
    });
  });

  describe('log - promise:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should request call log and return \'true\' using: call-start', function(done) {
      this.ivr.log('call-start')
      .then(function(_res) {
        assert(typeof _res === 'boolean');
        assert(_res === true);
      })
      .then(done);
    });

    it('should request call log and return \'error\' using: custom-state', function(done) {
      this.ivr.log('custom-state')
      .catch(function(_err) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_err.status === 400);
      })
      .then(done);
    });
  });

  describe('log - callback:', function() {
    before(function() {
      this.app = new Dialonce.Application(fixtures.API_KEY, fixtures.API_SECRET);
      this.ivr = new Dialonce.Ivr(this.app, fixtures.CALLER, fixtures.CALLED);
      assert(this.ivr.caller === fixtures.CALLER);
      assert(this.ivr.called === fixtures.CALLED);
    });

    it('should request call log and return \'true\' using: call-start', function(done) {
      this.ivr.log('call-start', function(_err, _res) {
        assert(_err === null);
        assert(typeof _res === 'boolean');
        assert(_res === true);
        done();
      });
    });

    it('should request call log and return \'error\' using: custom-state', function(done) {
      this.ivr.caller = '+336XXXXXXXX';
      this.ivr.log('custom-state', function(_err, _res) {
        assert(typeof _err === 'object');
        assert(_err.message === 'Bad request');
        assert(_res === null);
       done();
      });
    });
  });
});
