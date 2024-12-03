const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
  // Test SUM operation
  describe('SUM operation', () => {
    it('should round 1.2 and 2.8 to 1 and 3, then return the sum of 4', () => {
      expect(calculateNumber('SUM', 1.2, 2.8)).to.equal(4);
    });

    it('should round -1.6 and -2.4 to -2 and -2, then return the sum of -4', () => {
      expect(calculateNumber('SUM', -1.6, -2.4)).to.equal(-4);
    });
  });

  // Test SUBTRACT operation
  describe('SUBTRACT operation', () => {
    it('should round 5.7 and 2.3 to 6 and 2, then return the difference of 4', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(4);
    });

    it('should round -5.5 and 3.5 to -6 and 4, then return the difference of -10', () => {
      expect(calculateNumber('SUBTRACT', -5.6, 3.5)).to.equal(-10);
    });
  });

  // Test DIVIDE operation
  describe('DIVIDE operation', () => {
    it('should round 4.9 and 2.1 to 5 and 2, then return the quotient of 2.5', () => {
      expect(calculateNumber('DIVIDE', 4.9, 2.1)).to.equal(2.5);
    });

    it('should return "Error" when dividing by zero (0)', () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });

    it('should round -10.5 and -2.2 to -10 and -2, then return the quotient of 5', () => {
      expect(calculateNumber('DIVIDE', -10.5, -2.2)).to.equal(5);
    });

    it('should round 1.99 and 1.5 to 2 and 2, then return the quotient of 1', () => {
      expect(calculateNumber('DIVIDE', 1.99, 1.5)).to.equal(1);
    });
  });

  // Test for invalid operation type
  describe('Invalid operation type', () => {
    it('should throw an error for an invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
