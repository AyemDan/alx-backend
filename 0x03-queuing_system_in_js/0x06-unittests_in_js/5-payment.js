const Utils = require('./utils');

function sendPaymentRequestToApi(a, b) {
  const sum = Utils.calculateNumber('SUM', a, b);
  console.log('The total is:', sum);
  return sum;
}

module.exports = sendPaymentRequestToApi;
