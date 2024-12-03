const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    // Call the function with 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    expect(spy.calledOnceWithExactly('The total is:', 120)).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    // Call the function with 10 and 10
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called with the correct message
    expect(spy.calledOnceWithExactly('The total is:', 20)).to.be.true;
  });
});
