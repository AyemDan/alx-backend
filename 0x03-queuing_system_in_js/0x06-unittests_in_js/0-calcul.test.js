const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', () => {
  // Test: rounding positive numbers
  it('should round 1.2 and 2.8 to 1 and 3, then return the sum of 4', () => {
    assert.strictEqual(calculateNumber(1.2, 2.8), 4);
  });

  // Test: rounding numbers with decimals exactly at 0.5
  it('should round 1.5 and 2.5 to 2 and 2, then return the sum of 5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  // Test: rounding negative numbers
  it('should round -1.6 and -2.4 to -2 and -2, then return the sum of -4', () => {
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
  });

  // Test: rounding 0 values
  it('should round 0 and 0 to 0 and 0, then return the sum of 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  // Test: rounding extreme decimal numbers
  it('should round 123.49999 and 123.50001 to 123 and 124, then return the sum of 247', () => {
    assert.strictEqual(calculateNumber(123.49999, 123.50001), 247);
  });

  // Test: rounding positive numbers with small decimals
  it('should round 1.01 and 2.99 to 1 and 3, then return the sum of 4', () => {
    assert.strictEqual(calculateNumber(1.01, 2.99), 4);
  });

  // Test: rounding large numbers
  it('should round 1000000.5 and 1000000.4 to 1000001 and 1000000, then return the sum of 2000001', () => {
    assert.strictEqual(calculateNumber(1000000.5, 1000000.4), 2000001);
  });
});
