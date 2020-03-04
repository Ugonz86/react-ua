const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-476875.okta.com',
  token: '00Or5_yX1HpEmoWg6YxZBGykvtOfrwvAcA4HollZRk'
});

module.exports = client;