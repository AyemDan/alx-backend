const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments and return 10', () => {
    const result = sendPaymentRequestToApi(100, 20);

    expect(result).to.equal(10);

    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    expect(spy.calledOnceWithExactly('The total is:', 10)).to.be.true;
  });
});
