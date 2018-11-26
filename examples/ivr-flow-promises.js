/**
 * Modules dependencies
 */
const Application = require('../lib/Application');
const Ivr = require('../lib/Ivr');

const apiKey = 'qpvao53b1x10z7u3906wvgzmvexuxwxj';
const apiSecret = '56g5jvhlciv9e0l4izccjqkf54okh21jbn4d4yj7';
const app = new Application(apiKey, apiSecret);
const ivr = new Ivr(app, '+33600000000', '+33100000000');

/**
 * This will print
 * ivr-flow-promises res[1]: true
 */
ivr.isMobile()
  .then((res) => {
    console.log('ivr-flow-promises res[1]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[1]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises res[2]: false
 */
ivr.caller = '+33100000000';
ivr.isMobile()
  .then((res) => {
    console.log('ivr-flow-promises res[2]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[2]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises err[3]: Bad request
 */
ivr.caller = 'XXX';
ivr.isMobile()
  .then((res) => {
    console.log('ivr-flow-promises res[3]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[3]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises res[4]: true
 */
ivr.caller = '+33600000000';
ivr.isEligible()
  .then((res) => {
    console.log('ivr-flow-promises res[4]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[4]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises res[5]: false
 */
ivr.caller = '+33100000000';
ivr.isEligible()
  .then((res) => {
    console.log('ivr-flow-promises res[5]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[5]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises err[6]: Bad request
 */
ivr.caller = 'XXX';
ivr.isEligible()
  .then((res) => {
    console.log('ivr-flow-promises res[6]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[6]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises res[7]: true
 */
ivr.caller = '+33600000000';
ivr.serviceRequest()
  .then((res) => {
    console.log('ivr-flow-promises res[7]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[7]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises err[8]: Bad request
 */
ivr.caller = 'XXX';
ivr.serviceRequest()
  .then((res) => {
    console.log('ivr-flow-promises res[8]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[8]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises res[9]: true
 */
ivr.caller = '+33600000000';
ivr.log('call-start')
  .then((res) => {
    console.log('ivr-flow-promises res[9]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[9]:', err.message);
  });

/**
 * This will print
 * ivr-flow-promises err[10]: Bad request
 */
ivr.log('XXX')
  .then((res) => {
    console.log('ivr-flow-promises res[10]:', res);
  })
  .catch((err) => {
    console.log('ivr-flow-promises err[10]:', err.message);
  });
