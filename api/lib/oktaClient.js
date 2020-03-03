const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-476875.okta.com',
  token: '00ZQS0WFCRhvno16hveR3Ds1m5QRXPe7lqddOy9Qft'
});

module.exports = client;