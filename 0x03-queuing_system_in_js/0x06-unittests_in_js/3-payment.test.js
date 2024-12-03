const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy for the calculateNumber function before each test
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the original function after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', () => {
    // Call sendPaymentRequestToApi with 100 and 20
    const result = sendPaymentRequestToApi(100, 20);

    // Validate that the result is correct
    expect(result).to.equal(120); // The expected sum is 100 + 20 = 120

    // Verify that the spy was called once with the correct arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
