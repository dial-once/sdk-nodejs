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
 * ivr-flow-callbacks err[1]: null
 * ivr-flow-callbacks res[1]: true
 */
ivr.isMobile((err, res) => {
  console.log('ivr-flow-callbacks err[1]:', err);
  console.log('ivr-flow-callbacks res[1]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[2]: null
 * ivr-flow-callbacks res[2]: false
 */
ivr.caller = '+33100000000';
ivr.isMobile((err, res) => {
  console.log('ivr-flow-callbacks err[2]:', err);
  console.log('ivr-flow-callbacks res[2]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[3]: Bad request
 * ivr-flow-callbacks res[3]: null
 */
ivr.caller = 'XXX';
ivr.isMobile((err, res) => {
  console.log('ivr-flow-callbacks err[3]:', err.message);
  console.log('ivr-flow-callbacks res[3]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[4]: null
 * ivr-flow-callbacks res[4]: true
 */
ivr.caller = '+33600000000';
ivr.isEligible((err, res) => {
  console.log('ivr-flow-callbacks err[4]:', err);
  console.log('ivr-flow-callbacks res[4]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[5]: null
 * ivr-flow-callbacks res[5]: false
 */
ivr.caller = '+33100000000';
ivr.isEligible((err, res) => {
  console.log('ivr-flow-callbacks err[5]:', err);
  console.log('ivr-flow-callbacks res[5]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[6]: Bad request
 * ivr-flow-callbacks res[6]: null
 */
ivr.caller = 'XXX';
ivr.isEligible((err, res) => {
  console.log('ivr-flow-callbacks err[6]:', err.message);
  console.log('ivr-flow-callbacks res[6]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[7]: null
 * ivr-flow-callbacks res[7]: true
 */
ivr.caller = '+33600000000';
ivr.serviceRequest((err, res) => {
  console.log('ivr-flow-callbacks err[7]:', err);
  console.log('ivr-flow-callbacks res[7]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[8]: Bad request
 * ivr-flow-callbacks res[8]: null
 */
ivr.caller = 'XXX';
ivr.serviceRequest((err, res) => {
  console.log('ivr-flow-callbacks err[8]:', err.message);
  console.log('ivr-flow-callbacks res[8]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[9]: null
 * ivr-flow-callbacks res[9]: true
 */
ivr.caller = '+33600000000';
ivr.log('call-start', (err, res) => {
  console.log('ivr-flow-callbacks err[9]:', err);
  console.log('ivr-flow-callbacks res[9]:', res);
});

/**
 * This will print
 * ivr-flow-callbacks err[10]: Bad request
 * ivr-flow-callbacks res[10]: null
 */
ivr.log('XXXX', (err, res) => {
  console.log('ivr-flow-callbacks err[10]:', err.message);
  console.log('ivr-flow-callbacks res[10]:', res);
});
